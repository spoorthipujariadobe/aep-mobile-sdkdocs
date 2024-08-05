"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6275],{35356:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t,i=a(87462),d=a(63366),l=(a(15007),a(64983)),m=a(91515),s=["components"],o={},r=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:o},h=m.Z;function u(e){var n=e.components,a=(0,d.Z)(e,s);return(0,l.mdx)(h,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"handle-url-clicks-from-an-in-app-message"},"Handle URL clicks from an in-app message"),(0,l.mdx)("p",null,"When a link is clicked in an in-app message, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"FullscreenMessageDelegate")," is responsible for handling behavior."),(0,l.mdx)("p",null,"If the scheme used in the link ",(0,l.mdx)("strong",{parentName:"p"},"is not")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"adbinapp://"),", the link will open in the containing WKWebView (iOS) or WebView (Android) - this is default behavior."),(0,l.mdx)("p",null,"If the scheme used in the link ",(0,l.mdx)("strong",{parentName:"p"},"is")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"adbinapp://"),", the following behavior may occur:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The in-app message is dismissed"),(0,l.mdx)("li",{parentName:"ul"},"An interaction event is sent to Experience Edge"),(0,l.mdx)("li",{parentName:"ul"},"The default animation is overridden"),(0,l.mdx)("li",{parentName:"ul"},"The URL will be opened by the OS, potentially resulting in:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The link being opened by the device's default web browser"),(0,l.mdx)("li",{parentName:"ul"},"Opening of a deeplink")))),(0,l.mdx)("h2",{id:"dismiss-the-in-app-message"},"Dismiss the in-app message"),(0,l.mdx)("p",null,"In order for the SDK to remove the view containing an in-app message from the UI, the clicked link must have a host of ",(0,l.mdx)("inlineCode",{parentName:"p"},"dismiss"),"."),(0,l.mdx)("p",null,"The example below is a link that will dismiss the current in-app message:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"adbinapp://dismiss\n")),(0,l.mdx)("h2",{id:"send-a-message-interaction-event-to-experience-edge"},"Send a message interaction event to Experience Edge"),(0,l.mdx)("p",null,"Adding a URL variable named ",(0,l.mdx)("inlineCode",{parentName:"p"},"interaction")," will cause the SDK to send an Experience Event to the Adobe Experience Edge."),(0,l.mdx)("p",null,"The example below will dismiss the current in-app message and send a ",(0,l.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," event to edge with an action of ",(0,l.mdx)("inlineCode",{parentName:"p"},"imageLiked"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"adbinapp://dismiss?interaction=imageLiked\n")),(0,l.mdx)("h2",{id:"override-the-default-dismiss-animation"},"Override the default dismiss animation"),(0,l.mdx)("p",null,"Adding a URL variable named ",(0,l.mdx)("inlineCode",{parentName:"p"},"animate")," will cause the SDK to override the dismiss animation for the message."),(0,l.mdx)("p",null,"The example below will dismiss the current in-app message, and override the animation so the message exits to the right side of the screen:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"adbinapp://dismiss?animate=right\n")),(0,l.mdx)("p",null,"Below is a list of valid values for ",(0,l.mdx)("inlineCode",{parentName:"p"},"animate"),":"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Value"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"none"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message is removed with no animation")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"left"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,l.mdx)("strong",{parentName:"td"},"left")," when dismissed")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"right"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,l.mdx)("strong",{parentName:"td"},"right")," when dismissed")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"top"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,l.mdx)("strong",{parentName:"td"},"top")," when dismissed")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"bottom"),(0,l.mdx)("td",{parentName:"tr",align:null},"Message animates off the screen to the ",(0,l.mdx)("strong",{parentName:"td"},"bottom")," when dismissed")))),(0,l.mdx)("p",null,"If the value for ",(0,l.mdx)("inlineCode",{parentName:"p"},"animate")," is empty, or if it doesn't match one of the above valid values, an animation of ",(0,l.mdx)("inlineCode",{parentName:"p"},"none")," will be used."),(0,l.mdx)("h2",{id:"open-a-link-from-the-url"},"Open a link from the URL"),(0,l.mdx)("p",null,"If the value for a URL variable named ",(0,l.mdx)("inlineCode",{parentName:"p"},"link")," contains a valid URL, the SDK will open the link using the OS-defined API."),(0,l.mdx)("h3",{id:"open-location-in-the-default-web-browser"},"Open location in the default web browser"),(0,l.mdx)("p",null,"If the provided URL does not contain a custom scheme, the URL will be loaded in the device's default web browser.  "),(0,l.mdx)("p",null,"The example below will dismiss the current in-app message, send a ",(0,l.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," event to edge with an action of ",(0,l.mdx)("inlineCode",{parentName:"p"},"adobe"),", and open the adobe.com website in the default web browser for the user's device:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"adbinapp://dismiss?interaction=adobe&link=https%3A%2F%2Fwww.adobe.com%3Fkey%3Dvalue\n")),(0,l.mdx)(r,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"link")," parameter must be URL encoded. If you are setting this value in the AJO message authoring UI, the value will automatically be encoded. If your message is custom HTML, you must encode the value manually."),(0,l.mdx)("h3",{id:"open-a-deeplink"},"Open a deeplink"),(0,l.mdx)(r,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Android deeplinks require intent filters to be added in the app manifest to correctly handle deeplink URLs. Please see the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"Android developer documentation")," for more information."),(0,l.mdx)(r,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"iOS deeplinks require a custom URL scheme to be setup in the application's ",(0,l.mdx)("inlineCode",{parentName:"p"},"info")," tab within Xcode to correctly handle deeplink URLs. Please see the ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Apple developer documentation")," for more information."),(0,l.mdx)("p",null,"If the provided URL contains a custom scheme, the app that handles the custom scheme will be launched."),(0,l.mdx)("p",null,"The example below will dismiss the current in-app message, then launch an app owned by the same developer which handles the scheme ",(0,l.mdx)("inlineCode",{parentName:"p"},"myAppScheme"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-shell"},"adbinapp://dismiss?link=myAppScheme://deeplinked\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-tutorials-handle-clicks-md-278453fea7d60e391bec.js.map