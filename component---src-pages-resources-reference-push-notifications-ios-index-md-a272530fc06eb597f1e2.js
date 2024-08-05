"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3022],{38154:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return c}});var o,a=t(87462),i=t(63366),r=(t(15007),t(64983)),d=t(91515),p=["components"],l={},m=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:l},u=d.Z;function c(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.mdx)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"push-templates-setup---ios"},"Push templates setup - iOS"),(0,r.mdx)("p",null,"Learn how to install the AEPNotificationContent package by following the instructions below."),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("p",null,"Make sure you have ",(0,r.mdx)("a",{parentName:"p",href:"./create-extension.md"},"created a notification extension")," and configured your app to ",(0,r.mdx)("a",{parentName:"p",href:"./../../../../solution/adobe-campaign-classic/"},"use Adobe Campaign Classic"),"."),(0,r.mdx)("h2",{id:"install-using-cocoapods"},"Install using ",(0,r.mdx)("a",{parentName:"h2",href:"https://guides.cocoapods.org/using/using-cocoapods.html"},"CocoaPods")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"# Podfile\nuse_frameworks!\n\n# for app development, include all the following pods\ntarget 'YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME' do\n      pod 'AEPNotificationContent'\nend\n")),(0,r.mdx)("p",null,"Replace ",(0,r.mdx)("inlineCode",{parentName:"p"},"YOUR_NOTIFICATION_CONTENT_EXTENSION_NAME")," and then, in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Podfile")," directory, run:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"$ pod install\n")),(0,r.mdx)("h3",{id:"install-using-swift-package-manager"},"Install using ",(0,r.mdx)("a",{parentName:"h3",href:"https://github.com/apple/swift-package-manager"},"Swift Package Manager")),(0,r.mdx)("p",null,"To add the AEPNotificationContent Package to your application, from the Xcode menu select:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"File > Add Packages...")),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The menu options may vary depending on the version of Xcode being used."),(0,r.mdx)("p",null,"Enter the URL for the AEP UI repository: ",(0,r.mdx)("inlineCode",{parentName:"p"},"https://github.com/adobe/aepsdk-ui-ios.git"),"."),(0,r.mdx)("p",null,"For ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dependency Rule"),", select ",(0,r.mdx)("inlineCode",{parentName:"p"},"Up to Next Major Version"),"."),(0,r.mdx)("p",null,"Alternatively, if your project has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Package.swift")," file, you can add the AEPNotificationContent extension directly to your dependencies:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n    .package(name: "AEPNotificationContent", url: "https://github.com/adobe/aepsdk-ui-ios.git", .upToNextMajor(from: "5.0.0"))\n],\ntargets: [\n    .target(\n        name: "YourNotificationContentExtensionTarget",\n        dependencies: [\n            .product(name: "AEPNotificationContent", package: "AEPNotificationContent")\n        ]\n    )\n]\n')),(0,r.mdx)("h3",{id:"install-using-binaries"},"Install using binaries"),(0,r.mdx)("p",null,"To generate ",(0,r.mdx)("inlineCode",{parentName:"p"},"AEPNotificationContent.xcframework"),", run the following command from the root directory:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"make archive\n")),(0,r.mdx)("p",null,"This will generate an XCFramework under the ",(0,r.mdx)("inlineCode",{parentName:"p"},"build")," folder. Drag and drop ",(0,r.mdx)("inlineCode",{parentName:"p"},"AEPNotificationContent.xcframework")," to your app's Notification Content extension target."),(0,r.mdx)("h3",{id:"configure-your-notification-content-extension"},"Configure your Notification Content extension"),(0,r.mdx)("p",null,"With the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AEPNotificationContent")," package now available in your application, you need to ",(0,r.mdx)("a",{parentName:"p",href:"./configure-extension.md"},"configure your notification content extension")," to use it."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-reference-push-notifications-ios-index-md-a272530fc06eb597f1e2.js.map