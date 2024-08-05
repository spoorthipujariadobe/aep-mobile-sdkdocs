"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6441],{50149:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return u}});var a,i=n(87462),o=n(63366),d=(n(15007),n(64983)),r=n(91515),m=n(67197),s=["components"],p={},l=(a="TabsBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),c={_frontmatter:p},x=r.Z;function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,d.mdx)(x,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"propositionitem"},"PropositionItem"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"PropositionItem")," class represents the decision proposition item received from the remote, upon a personalization query to the Experience Edge network."),(0,d.mdx)("h2",{id:"ios-interface"},"iOS Interface"),(0,d.mdx)("h2",{id:"public-variables"},"Public variables"),(0,d.mdx)("h3",{id:"contentcardschemadata"},"contentCardSchemaData"),(0,d.mdx)("p",null,"Decodes and returns item data content as an ",(0,d.mdx)("a",{parentName:"p",href:"./content-card-schema-data.md"},"ContentCardSchemaData")," object."),(0,d.mdx)("p",null,"Returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil")," if decoding fails or if the proposition item schema is not ",(0,d.mdx)("inlineCode",{parentName:"p"},".contentCard"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"var contentCardSchemaData: ContentCardSchemaData?\n")),(0,d.mdx)("h3",{id:"htmlcontent"},"htmlContent"),(0,d.mdx)("p",null,"Returns item data content as a string if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"htmlContent"),", otherwise returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"var htmlContent: String? \n")),(0,d.mdx)("h3",{id:"inappschemadata"},"inappSchemaData"),(0,d.mdx)("p",null,"Decodes and returns item data content as an ",(0,d.mdx)("a",{parentName:"p",href:"./inapp-schema-data.md"},"InAppSchemaData")," object."),(0,d.mdx)("p",null,"Returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil")," if decoding fails or if the proposition item schema is not ",(0,d.mdx)("inlineCode",{parentName:"p"},".inApp"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"var inappSchemaData: InAppSchemaData?\n")),(0,d.mdx)("h3",{id:"itemdata"},"itemData"),(0,d.mdx)("p",null,"Proposition item data as dictionary."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"public let itemData: [String: Any]\n")),(0,d.mdx)("h3",{id:"itemid"},"itemId"),(0,d.mdx)("p",null,"Unique proposition item identifier."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"public let itemId: String\n")),(0,d.mdx)("h3",{id:"jsoncontentarray"},"jsonContentArray"),(0,d.mdx)("p",null,"Returns item data content as an array if it can be parsed as an array and if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"jsonContent"),", otherwise returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"var jsonContentArray: [Any]?\n")),(0,d.mdx)("h3",{id:"jsoncontentdictionary"},"jsonContentDictionary"),(0,d.mdx)("p",null,"Returns item data content as a dictionary if it can be parsed as a dictionary and if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"jsonContent"),", otherwise returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"nil"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"var jsonContentDictionary: [String: Any]?\n")),(0,d.mdx)("h3",{id:"schema"},"schema"),(0,d.mdx)("p",null,"Proposition item schema string."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"public let schema: String\n")),(0,d.mdx)("h2",{id:"public-functions"},"Public functions"),(0,d.mdx)("h3",{id:"generateinteractionxdm"},"generateInteractionXdm"),(0,d.mdx)("p",null,"Returns a dictionary containing XDM data for interaction with the given proposition item, for the provided event type."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(m.default,{query:"platform=ios&function=generate-interaction-xdm",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"track"},"track"),(0,d.mdx)("p",null,"Tracks interaction with the given proposition item."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(m.default,{query:"platform=ios&function=track",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"android-interface"},"Android Interface"),(0,d.mdx)("h2",{id:"public-functions-1"},"Public functions"),(0,d.mdx)("h3",{id:"generateinteractionxdm-1"},"generateInteractionXdm"),(0,d.mdx)("p",null,"Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=generate-interaction-xdm",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"generateinteractionxdm-2"},"generateInteractionXdm"),(0,d.mdx)("p",null,"Returns a Map containing XDM data for interaction with the given proposition item, for the provided event type and decision item tokens."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=generate-interaction-xdm-with-tokens",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getcontentcardschemadata"},"getContentCardSchemaData"),(0,d.mdx)("p",null,"Decodes and returns this proposition item's content schema as a ",(0,d.mdx)("a",{parentName:"p",href:"./content-card-schema-data.md"},"ContentCardSchemaData"),", or ",(0,d.mdx)("inlineCode",{parentName:"p"},"null")," if decoding fails."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-content-card-schema-data",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"gethtmlcontent"},"getHtmlContent"),(0,d.mdx)("p",null,"Returns item data content as a string if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"HTML_CONTENT"),", otherwise returns null."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-html-content",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getinappschemadata"},"getInAppSchemaData"),(0,d.mdx)("p",null,"Decodes and returns this proposition item's content schema as a ",(0,d.mdx)("a",{parentName:"p",href:"./inapp-schema-data.md"},"InAppSchemaData"),", or ",(0,d.mdx)("inlineCode",{parentName:"p"},"null")," if decoding fails."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-inapp-schema-data",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getitemdata"},"getItemData"),(0,d.mdx)("p",null,"Returns this proposition's unique identifier as a string."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-item-data",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getitemid"},"getItemId"),(0,d.mdx)("p",null,"Returns this proposition item's unique identifier as a string."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-item-id",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getjsoncontentarraylist"},"getJsonContentArrayList"),(0,d.mdx)("p",null,"Returns item data content as a list if it can be parsed as a list and if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON_CONTENT"),", otherwise returns null."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-json-content-array-list",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getjsoncontentmap"},"getJsonContentMap"),(0,d.mdx)("p",null,"Returns item data content as a Map if it can be parsed as a Map and if the proposition item schema is ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON_CONTENT"),", otherwise returns null."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-json-content-map",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"getschema"},"getSchema"),(0,d.mdx)("p",null,"Returns this proposition item's content schema as a string."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=get-schema",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"track-1"},"track"),(0,d.mdx)("p",null,"Tracks interaction with the given proposition item."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=track",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"track-2"},"track"),(0,d.mdx)("p",null,"Tracks interaction with the given proposition item for the provided decision item tokens."),(0,d.mdx)(l,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(m.default,{query:"platform=android&function=track-with-tokens",mdxType:"Tabs"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-public-classes-proposition-item-md-9e0f14fcd0b8785873c0.js.map