import { mount } from 'marketing/MarketingPages'
import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate} = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });

        // Check if onParentNavigate is defined before using it
        if (onParentNavigate) {
            history.listen(onParentNavigate);
        }
    }, []);

    return <div ref={ref} />
}
