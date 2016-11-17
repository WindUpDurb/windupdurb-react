"use strict";

import React, {PropTypes} from "react";

export const Disqus = ({url}) => {
    //Disqus code:
    var disqus_config = function () {
        this.page.url = `http://windupdurb.com/writing/${url}`;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = url; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() {
        var d = document, s = d.createElement('script');
        s.src = '//windupdurb.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    //end disqus
    return (
        <div style={{padding: "15px 13% 15px 13%"}}>
            <div id="disqus_thread"/>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

        </div>
    );
};

Disqus.propTypes = {
    url: PropTypes.string
};