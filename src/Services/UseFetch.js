import { useEffect, useState } from "react";

export default function UseFetch(url, options) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                console.log("fetch");
                setResult(json);
                setLoading(false);
            }
            catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url]);
    return { loading, result, error };
}