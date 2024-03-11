'use client'
import { useEffect } from 'react';

export default function Index() {
useEffect(() => {
    const isChaportLoaded = !!window.chaport;
    if (!isChaportLoaded) {
    window.chaportConfig = {
        appId: '65da8260c4a34c0f3c13ae95',
    };
    (function(w, d, v3) {
        if (w.chaport) return;
        v3 = w.chaport = {};
        v3._q = [];
        v3._l = {};
        v3.q = function() { v3._q.push(arguments); };
        v3.on = function(e, fn) {
            if (!v3._l[e]) v3._l[e] = [];
            v3._l[e].push(fn);
        };
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://app.chaport.com/javascripts/insert.js';
        var ss = d.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    })(window, document);
    }
    }, []);

    return <div />;
}
