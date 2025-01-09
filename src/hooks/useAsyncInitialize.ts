import { useEffect, useState } from "react";

export const useAsyncInitialize = <T>(initializer: () => Promise<T | undefined>): T | undefined => {
    const [value, setValue] = useState<T | undefined>(undefined);

    useEffect(() => {
        let isMounted = true;

        initializer()
            .then((result) => {
                if (isMounted) {
                    setValue(result);
                }
            })
            .catch((error) => {
                console.error("Error in useAsyncInitialize:", error);
            });

        return () => {
            isMounted = false;
        };
    }, [initializer]);

    return value;
};
