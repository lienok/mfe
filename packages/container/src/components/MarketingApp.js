import { mount as marketingPagesMount } from 'marketing/MarketingPages'
import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        marketingPagesMount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });
    }, []);

    return <dif ref={ref} />
}
