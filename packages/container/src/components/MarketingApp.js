import { mount as marketingPagesMount } from 'marketing/MarketingPages'
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        marketingPagesMount(ref.current);
    }, []);

    return <dif ref={ref} />
}
