"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4470],{25209:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var i=a(87462),n=a(63366),r=(a(15007),a(64983)),o=a(91515),d=["components"],l={},m={_frontmatter:l},s=o.Z;function p(e){var t=e.components,a=(0,n.Z)(e,d);return(0,r.mdx)(s,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"release-notes"},"Release notes"),(0,r.mdx)("h2",{id:"june-6-2024"},"June 6, 2024"),(0,r.mdx)("h3",{id:"react-native-target-602"},"React Native Target 6.0.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated typescript files to support strict null checks.")),(0,r.mdx)("h2",{id:"april-24-2024"},"April 24, 2024"),(0,r.mdx)("h3",{id:"react-native-target-601"},"React Native Target 6.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added namespace support to the Android module.")),(0,r.mdx)("h2",{id:"april-12-2024"},"April 12, 2024"),(0,r.mdx)("h3",{id:"react-native-target-600"},"React Native Target 6.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aepsdk-react-native/tree/main/packages/target"},"Target")," for Adobe Experience Platform React Native Library compatible with React Native Core 6.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform Android ",(0,r.mdx)("inlineCode",{parentName:"li"},"3.x")," SDKs."),(0,r.mdx)("li",{parentName:"ul"},"Updated to use Experience Platform iOS ",(0,r.mdx)("inlineCode",{parentName:"li"},"5.x")," SDKs.")),(0,r.mdx)("h2",{id:"april-2-2024"},"April 2, 2024"),(0,r.mdx)("h3",{id:"android-target-300"},"Android Target 3.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Target")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 3.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported Android API level to 21."),(0,r.mdx)("li",{parentName:"ul"},"Removed deprecated ",(0,r.mdx)("inlineCode",{parentName:"li"},"registerExtension")," API. Use the MobileCore.registerExtensions() API for registering extensions and initializing the SDK instead."),(0,r.mdx)("li",{parentName:"ul"},"Migrated Target Preview to use Jetpack Compose based UI Services from MobileCore 3.0.0")),(0,r.mdx)("h2",{id:"march-20-2024"},"March 20, 2024"),(0,r.mdx)("h3",{id:"ios-target-500"},"iOS Target 5.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Target")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 5.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 12.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 15.0.1 with the GitHub release."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug when using Target Preview on device that caused the floating button to remain visible when a preview selection was active.")),(0,r.mdx)("h2",{id:"february-28-2024"},"February 28, 2024"),(0,r.mdx)("h3",{id:"ios-target-404"},"iOS Target 4.0.4"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added max versions to Platform dependencies in podspec")),(0,r.mdx)("h2",{id:"january-26-2024"},"January 26, 2024"),(0,r.mdx)("h3",{id:"ios-target-403"},"iOS Target 4.0.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where Target response tokens were not returned in ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest"),"'s ",(0,r.mdx)("inlineCode",{parentName:"li"},"contentWithDataCallback")," callback when using ",(0,r.mdx)("inlineCode",{parentName:"li"},"retrieveLocationContent")," API.")),(0,r.mdx)("p",null,"The response tokens should be parsed as ",(0,r.mdx)("inlineCode",{parentName:"p"},"[String: Any]"),". For details, see usage example for ",(0,r.mdx)("a",{parentName:"p",href:"./api-reference.md#retrievelocationcontent"},"retrieveLocationContent")," API."),(0,r.mdx)("h3",{id:"android-target-203"},"Android Target 2.0.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where Target response tokens were not returned in ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest"),"'s ",(0,r.mdx)("inlineCode",{parentName:"li"},"AdobeTargetDetailedCallback")," callback when using ",(0,r.mdx)("inlineCode",{parentName:"li"},"retrieveLocationContent")," API.")),(0,r.mdx)("p",null,"The response tokens should be parsed as ",(0,r.mdx)("inlineCode",{parentName:"p"},"Map<String: Object>"),". For details, see usage example for ",(0,r.mdx)("a",{parentName:"p",href:"./api-reference.md#retrievelocationcontent"},"retrieveLocationContent")," API."),(0,r.mdx)("h2",{id:"october-12-2023"},"October 12, 2023"),(0,r.mdx)("h3",{id:"ios-target-402"},"iOS Target 4.0.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Access to containers in ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetState")," is now synchronized in order to prevent possible runtime exceptions.")),(0,r.mdx)("h2",{id:"july-11-2023"},"July 11, 2023"),(0,r.mdx)("h3",{id:"ios-target-401-and-android-target-201"},"iOS Target 4.0.1 and Android Target 2.0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug in which a Target Response containing JSON Array content was rejected.")),(0,r.mdx)("h2",{id:"june-7-2023"},"June 7, 2023"),(0,r.mdx)("h3",{id:"ios-target-400"},"iOS Target 4.0.0"),(0,r.mdx)("p",null,"Major version update for ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Adobe Target")," for Adobe Experience Platform Mobile SDKs on iOS compatible with Mobile Core 4.0.0. The current release includes the following changes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Updated the minimum supported version to iOS 11.0."),(0,r.mdx)("li",{parentName:"ul"},"Include XCFrameworks built with Xcode 14.1 with the GitHub release.")),(0,r.mdx)("h2",{id:"march-2-2023"},"March 2, 2023"),(0,r.mdx)("h3",{id:"ios-target-331"},"iOS Target 3.3.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"target.previewEnabled")," configuration setting is no longer required to enable preview mode in Target iOS SDK. If not configured, the default value here will be set to true.")),(0,r.mdx)("h2",{id:"february-9-2023"},"February 9, 2023"),(0,r.mdx)("h3",{id:"android-target-200"},"Android Target 2.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Major version update for ",(0,r.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Target")," for Adobe Experience Platform Mobile SDKs on Android compatible with Mobile Core 2.0.0. This library is now available as an ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-target-android"},"open source project on GitHub"),".")),(0,r.mdx)("p",null,"Please note that the following improvements have been made in the current release:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The below APIs have been renamed for alignment with the Adobe Target Mobile SDK for iOS:")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"locationsDisplayed")," is now ",(0,r.mdx)("inlineCode",{parentName:"li"},"displayedLocations")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"locationClicked")," is now ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation"))),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"The public classes ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetPrefetch"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetOrder"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetProduct")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"TargetParameters")," are consolidated under the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target")," subpackage and require updating the import statements as shown below:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.target.TargetRequest;\nimport com.adobe.marketing.mobile.target.TargetPrefetch;\nimport com.adobe.marketing.mobile.target.TargetOrder;\nimport com.adobe.marketing.mobile.target.TargetProduct;\nimport com.adobe.marketing.mobile.target.TargetParameters;\n")),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},"The previously deprecated Target APIs and classes have been removed. For more information, please read this section on the ",(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/client-sdks/previous-versions/documentation/adobe-target/deprecated-apis/"},"deprecated APIs and the recommended alternative APIs"),".")),(0,r.mdx)("h2",{id:"august-2-2022"},"August 2, 2022"),(0,r.mdx)("h3",{id:"android-target-130"},"Android Target 1.3.0"),(0,r.mdx)("p",null,"Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setSessionId")," API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.sessionTimeout")," configuration setting. You can use this API in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API to set both of the value in the SDK."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"getSessionId")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"getTntId")," APIs can be used to retrieve the current Target session ID and tnt ID values respectively.")),(0,r.mdx)("h2",{id:"july-29-2022"},"July 29, 2022"),(0,r.mdx)("h3",{id:"ios-target-320"},"iOS Target 3.2.0"),(0,r.mdx)("p",null,"Added getter and setter APIs for Target tnt IDs and session IDs to enable cross-channel sessions."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setSessionId")," API should be invoked prior to any Target request to prevent the Mobile SDK from generating a session ID locally. The set session ID will follow the session expiry as governed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"target.sessionTimeout")," configuration setting.You can use this API in conjunction with ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API to set both of the value in the SDK."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"setTntId")," API, when invoked, also sets the Target edge host value in the SDK by deriving it from the profile location hint supplied in the tnt ID."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"getSessionId")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"getTntId")," APIs can be used to retrieve the current Target session ID and tnt ID values respectively.")),(0,r.mdx)("h2",{id:"may-26-2022"},"May 26, 2022"),(0,r.mdx)("h3",{id:"ios-target-313"},"iOS Target 3.1.3"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target display notification was not being sent to the server, upon invoking ",(0,r.mdx)("inlineCode",{parentName:"li"},"displayedLocations")," API, if a prior prefetch call did not return profile state token for the mbox.")),(0,r.mdx)("h2",{id:"november-19-2021"},"November 19, 2021"),(0,r.mdx)("h3",{id:"ios-target-312"},"iOS Target 3.1.2"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target qaMode parameters were not being attached to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"retrieveLocationContent")," API requests, once the Target preview selections were confirmed.")),(0,r.mdx)("h2",{id:"october-22-2021"},"October 22, 2021"),(0,r.mdx)("h3",{id:"ios-target-311"},"iOS Target 3.1.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the Target session ID was not being persisted in the local storage if the app was closed before session expiry.")),(0,r.mdx)("h3",{id:"ios-target-310"},"iOS Target 3.1.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"TargetRequest")," class now provides a constructor with a new callback function named ",(0,r.mdx)("inlineCode",{parentName:"li"},"contentWithDataCallback"),". When implemented, this callback provides:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Target content; AND"),(0,r.mdx)("li",{parentName:"ul"},"Data payload dictionary containing one or more of response tokens, Analytics payload, click metric Analytics payload (if available in the Target retrieve location content response with/ without a prior prefetch call)")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": This SDK extension, per previous behavior, will make requests to Adobe Analytics (if the Adobe Analytics extension is also implemented) with appropriate Target payloads for A4T functionality."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed an issue where the click notification was not being sent to Adobe Target for a retrieved mbox location upon the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation")," API call."),(0,r.mdx)("li",{parentName:"ul"},"Added support for sending the click conversion A4T payload to Adobe Analytics for A4T-enabled Target activities when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"clickedLocation")," API is called.")),(0,r.mdx)("h2",{id:"april-9-2021"},"April 9, 2021"),(0,r.mdx)("h3",{id:"ios-target-300"},"iOS Target 3.0.0"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial release to support ",(0,r.mdx)("a",{parentName:"li",href:"./index.md"},"Adobe Target")," for Adobe Experience Platform Mobile SDKs on iOS in Swift. This library is available as an ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-target-ios"},"open source project on GitHub"),".")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-target-release-notes-md-3a6b563a1304bf34c48f.js.map