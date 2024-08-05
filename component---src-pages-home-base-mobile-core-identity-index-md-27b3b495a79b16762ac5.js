"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3150,4799],{70908:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return h}});var i=n(87462),o=n(63366),a=(n(15007),n(64983)),r=n(91515),d=n(80791),l=["components"],m={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},p=s("InlineAlert"),c=s("TabsBlock"),u={_frontmatter:m},x=r.Z;function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.mdx)(x,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"identity"},"Identity"),(0,a.mdx)("p",null,"The Identity extension enables your app with the Experience Cloud ID (ECID). This service helps with the synchronization of Adobe and other customer identifiers."),(0,a.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"On web or other platforms, there might situations where this extension might not be required, and the implementation of this SDK extension on mobile apps is required."),(0,a.mdx)("p",null,"To get started with Identity, complete the following steps:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Add the ",(0,a.mdx)("strong",{parentName:"li"},"Identity")," extension to your app."),(0,a.mdx)("li",{parentName:"ol"},"Implement the SDK APIs to complete the following tasks:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Update customer IDs."),(0,a.mdx)("li",{parentName:"ul"},"Append Adobe visitor data to a URL string."),(0,a.mdx)("li",{parentName:"ul"},"Return customer IDs."),(0,a.mdx)("li",{parentName:"ul"},"Retrieve Experience Cloud IDs."),(0,a.mdx)("li",{parentName:"ul"},"Set advertising IDs."),(0,a.mdx)("li",{parentName:"ul"},"Set the device notification for push notifications.")))),(0,a.mdx)("h2",{id:"add-the-identity-extension-to-your-app"},"Add the Identity extension to your app"),(0,a.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&task=add",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&task=add",mdxType:"Tabs"}),(0,a.mdx)("h2",{id:"register-the-identity-extension"},"Register the Identity extension"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()")," API can be used to register the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK."),(0,a.mdx)("p",null,"To register the Identity extension, use the following code sample:"),(0,a.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,a.mdx)("p",null,"Android"),(0,a.mdx)(d.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,a.mdx)("p",null,"iOS"),(0,a.mdx)(d.default,{query:"platform=ios&task=register",mdxType:"Tabs"}),(0,a.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"Previously known as MCID/MID/MCMID, the Experience Cloud ID (ECID) is a 38 character ID that uniquely identifies each visitor in the Adobe Experience Platform."),(0,a.mdx)("p",null,"After the configuration is complete, an ECID is generated and, where applicable, is included on all Analytics and Audience Manager hits. Other IDs, such as custom and automatically-generated IDs, continue to be sent with each hit."))}h.isMDXComponent=!0},80791:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return x}});var i=n(87462),o=n(63366),a=(n(15007),n(64983)),r=n(91515),d=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",t)}},s=m("Variant"),p=m("InlineNestedAlert"),c={_frontmatter:l},u=r.Z;function x(e){var t=e.components,n=(0,o.Z)(e,d);return(0,a.mdx)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(s,{platform:"android",task:"add",repeat:"10",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Add the ",(0,a.mdx)("inlineCode",{parentName:"li"},"Identity")," library to your project using the app's gradle file.")),(0,a.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-kotlin"},'implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))\nimplementation("com.adobe.marketing.mobile:core")\nimplementation("com.adobe.marketing.mobile:identity")\n')),(0,a.mdx)("h4",{id:"groovy"},"Groovy"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:identity'\n")),(0,a.mdx)(p,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,a.mdx)("p",null,"Using dynamic dependency versions is ",(0,a.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,a.mdx)("a",{parentName:"p",href:"../../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,a.mdx)("ol",{start:2},(0,a.mdx)("li",{parentName:"ol"},"Import the Identity and MobileCore extensions in your application's main activity.")),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("p",null,"Import the library:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Identity;\n")),(0,a.mdx)(s,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Identity extensions to your project using Cocoapods. Add following pods in your ",(0,a.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"},"use_frameworks!\ntarget 'YourTargetApp' do\n    pod 'AEPCore', '~> 5.0'\n    pod 'AEPIdentity', '~> 5.0'\nend\n")),(0,a.mdx)("ol",{start:2},(0,a.mdx)("li",{parentName:"ol"},"Import the Identity library.")),(0,a.mdx)("h4",{id:"swift"},"Swift"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPIdentity\n")),(0,a.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPIdentity;\n")),(0,a.mdx)(s,{platform:"android",task:"register",repeat:"3",mdxType:"Variant"}),(0,a.mdx)("p",null,"After calling the ",(0,a.mdx)("inlineCode",{parentName:"p"},"setApplication()")," method in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"onCreate()")," method, register the Identity extension."),(0,a.mdx)("h4",{id:"java-1"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobileApp extends Application {\n@Override\npublic void onCreate() {\nsuper.onCreate();\n     MobileCore.setApplication(this);\n     List<Class<? extends Extension>> extensions = Arrays.asList(Identity.EXTENSION, ...);\n     MobileCore.registerExtensions(extensions, o -> {\n        // Any other post registration processing\n    });\n  }\n}\n")),(0,a.mdx)(s,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,a.mdx)("p",null,"Register the Identity extension in your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions")," function:"),(0,a.mdx)("h4",{id:"swift-1"},"Swift"),(0,a.mdx)("p",null,"When including both Identity and Identity for Edge Network extensions, register the extensions using their full Swift module names, such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"AEPIdentity.Identity.self"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n     MobileCore.registerExtensions([Identity.self, ...], {\n       ...\n     })\n}\n")),(0,a.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, ...] completion:^{\n   ...\n }];\n return YES;\n}\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-identity-index-md-27b3b495a79b16762ac5.js.map