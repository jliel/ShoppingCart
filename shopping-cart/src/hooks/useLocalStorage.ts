import { useState, useEffect } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = window.localStorage.getItem(key);
        if (item != null) {
            return JSON.parse(item);
        }
        return typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as [typeof storedValue, typeof setStoredValue];
}