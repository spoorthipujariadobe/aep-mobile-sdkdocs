"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1253,302],{90178:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return m},default:function(){return f}});var t=n(87462),l=n(63366),i=(n(15007),n(64983)),r=n(91515),o=n(39121),d=["components"],m={},p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",a)}},s=p("TabsBlock"),c=p("InlineAlert"),x={_frontmatter:m},u=r.Z;function f(e){var a=e.components,n=(0,l.Z)(e,d);return(0,i.mdx)(u,(0,t.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lifecycle-api-reference"},"Lifecycle API reference"),(0,i.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Lifecycle extension that is registered with the Mobile Core extension."),(0,i.mdx)("p",null,"To get the version of the Lifecycle extension, use the following code sample:"),(0,i.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(o.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(o.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"lifecyclestart"},"lifecycleStart"),(0,i.mdx)("p",null,"Starts the collection of lifecycle data."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Analytics use case:")," Use this API to start a new lifecycle session or resume a previously paused lifecycle session. If a previously paused session timed out, then a new session is created. If a current session is running, then calling this method does nothing."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Platform use case:")," Use this API to dispatch a ",(0,i.mdx)("a",{parentName:"p",href:"./event-reference.md#lifecycle-application-foreground"},"Lifecycle Application Foreground")," event when the application is launched."),(0,i.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(o.default,{query:"platform=android&api=lifecycle-start",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(o.default,{query:"platform=ios&api=lifecycle-start",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"lifecyclepause"},"lifecyclePause"),(0,i.mdx)("p",null,"Pauses the collection of lifecycle data."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Analytics use case:")," Use this API to pause the collection of lifecycle data."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"For Platform use case:")," Use this API to dispatch a ",(0,i.mdx)("a",{parentName:"p",href:"./event-reference.md#lifecycle-application-background"},"Lifecycle Application Background")," event when the application closes."),(0,i.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(o.default,{query:"platform=android&api=lifecycle-pause",mdxType:"Tabs"}),(0,i.mdx)("p",null,"iOS"),(0,i.mdx)(o.default,{query:"platform=ios&api=lifecycle-pause",mdxType:"Tabs"}),(0,i.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,i.mdx)(c,{variant:"warning",slots:"header, text1",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"This API has been deprecated starting in v2.0.0 and removed in v3.0.0 of the Android mobile extension."),(0,i.mdx)("p",null,"Use ",(0,i.mdx)("a",{parentName:"p",href:"../api-reference.md#registerextensions"},(0,i.mdx)("inlineCode",{parentName:"a"},"MobileCore.registerExtensions()"))," API instead."),(0,i.mdx)("p",null,"Registers the Lifecycle extension with the Mobile Core."),(0,i.mdx)(s,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,i.mdx)("p",null,"Android"),(0,i.mdx)(o.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}))}f.isMDXComponent=!0},39121:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var t,l=n(87462),i=n(63366),r=(n(15007),n(64983)),o=n(91515),d=["components"],m=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),p={},s=o.Z;function c(e){var a=e.components,n=(0,i.Z)(e,d);return(0,r.mdx)(s,(0,l.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(m,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"final String lifecycleExtensionVersion = Lifecycle.extensionVersion();\n")),(0,r.mdx)(m,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static var extensionVersion: String\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"let version = Lifecycle.extensionVersion\n")),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc static var extensionVersion: String\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *version = [AEPMobileLifecycle extensionVersion];\n")),(0,r.mdx)(m,{platform:"android",api:"lifecycle-start",repeat:"8",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("p",null,"This method should be called from the Activity onResume method."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void lifecycleStart(@Nullable final Map<String, String> additionalContextData)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MobileCore.lifecycleStart(null);\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'contextData.put("myapp.category", "Game");\nMobileCore.lifecycleStart(additionalContextData);\n')),(0,r.mdx)(m,{platform:"ios",api:"lifecycle-start",repeat:"14",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," static func lifecycleStart(additionalContextData: [String: Any]?)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," MobileCore.lifecycleStart(additionalContextData: nil)\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},' MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])\n')),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," @objc(lifecycleStart:)\n static func lifecycleStart(additionalContextData: [String: Any]?)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," [AEPMobileCore lifecycleStart:nil];\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},' [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];\n')),(0,r.mdx)(m,{platform:"android",api:"lifecycle-pause",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MobileCore.lifecyclePause();\n")),(0,r.mdx)(m,{platform:"ios",api:"lifecycle-pause",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-2"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," static func lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," MobileCore.lifecyclePause()\n")),(0,r.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," @objc(lifecyclePause)\n static func lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," [AEPMobileCore lifecyclePause];\n")),(0,r.mdx)(m,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-3"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Lifecycle.registerExtension();\n\n\nexport const _frontmatter = {}\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-lifecycle-api-reference-md-891b8553b48f7001aec4.js.map