"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8403,1493],{33023:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return x}});var a,o=t(87462),i=t(63366),s=(t(15007),t(64983)),r=t(91515),l=t(45859),p=["components"],d={},m=(a="TabsBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:d},u=r.Z;function x(e){var n=e.components,t=(0,i.Z)(e,p);return(0,s.mdx)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"adobe-experience-platform-assurance-extension"},"Adobe Experience Platform Assurance extension"),(0,s.mdx)("p",null,"This extension enables capabilities for ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/assurance/home.html"},"Adobe Experience Platform Assurance"),"."),(0,s.mdx)("p",null,"To get started with Assurance in your app, you'll need to:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Install the AEP Assurance extension in the ",(0,s.mdx)("a",{parentName:"li",href:"https://experience.adobe.com/#/data-collection"},"Data Collection UI")),(0,s.mdx)("li",{parentName:"ol"},"Add AEP Assurance SDK extension library to your app",(0,s.mdx)("ol",{parentName:"li"},(0,s.mdx)("li",{parentName:"ol"},"Import AEP Assurance into your app"),(0,s.mdx)("li",{parentName:"ol"},"Register and implement extension APIs")))),(0,s.mdx)("h2",{id:"install-the-aep-assurance-extension-in-the-data-collection-ui"},"Install the AEP Assurance extension in the Data Collection UI"),(0,s.mdx)("p",null,"Go to the ",(0,s.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/data-collection/"},"Experience Platform Data Collection UI")," and select your mobile property:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"In the Data Collection UI, select the ",(0,s.mdx)("strong",{parentName:"li"},"Extensions")," tab."),(0,s.mdx)("li",{parentName:"ol"},"On the ",(0,s.mdx)("strong",{parentName:"li"},"Catalog")," tab, locate the ",(0,s.mdx)("strong",{parentName:"li"},"AEP Assurance")," extension, and select ",(0,s.mdx)("strong",{parentName:"li"},"Install"),"."),(0,s.mdx)("li",{parentName:"ol"},"Follow the publishing process to update the Mobile SDK configuration.")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"306px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"112.09150326797386%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/9423a/assurance-extension.webp 306w"],sizes:"(max-width: 306px) 100vw, 306px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/bed10/assurance-extension.png 306w"],sizes:"(max-width: 306px) 100vw, 306px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/bed10/assurance-extension.png",alt:"assurance extension",title:"assurance extension",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"add-the-aep-assurance-extension-to-your-app"},"Add the AEP Assurance extension to your app"),(0,s.mdx)("h3",{id:"import-the-library-to-your-app-code"},"Import the library to your app code"),(0,s.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(l.default,{query:"platform=android&task=import-library",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(l.default,{query:"platform=ios&task=import-library",mdxType:"Tabs"}),(0,s.mdx)("h3",{id:"register-aepassurance-with-mobile-core"},"Register AEPAssurance with Mobile Core"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"MobileCore.registerExtensions()")," API can be used to register the Assurance extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK."),(0,s.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(l.default,{query:"platform=android&task=register-assurance",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(l.default,{query:"platform=ios&task=register-assurance",mdxType:"Tabs"}),(0,s.mdx)("h3",{id:"connect-to-an-assurance-session"},"Connect to an Assurance session"),(0,s.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,s.mdx)("p",null,"Android"),(0,s.mdx)(l.default,{query:"platform=android&task=implement-assurance",mdxType:"Tabs"}),(0,s.mdx)("p",null,"iOS"),(0,s.mdx)(l.default,{query:"platform=ios&task=implement-assurance",mdxType:"Tabs"}))}x.isMDXComponent=!0},45859:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return x}});var a=t(87462),o=t(63366),i=(t(15007),t(64983)),s=t(91515),r=["components"],l={},p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},d=p("Variant"),m=p("InlineNestedAlert"),c={_frontmatter:l},u=s.Z;function x(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.mdx)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(d,{platform:"android",task:"import-library",repeat:"6",mdxType:"Variant"}),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Add the following libraries to your project using the app's Gradle file.")),(0,i.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'implementation(platform("com.adobe.marketing.mobile:sdk-bom:3.+"))\nimplementation("com.adobe.marketing.mobile:core")\nimplementation("com.adobe.marketing.mobile:assurance")\n')),(0,i.mdx)("h4",{id:"groovy"},"Groovy"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:3.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:assurance'\n")),(0,i.mdx)(m,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,i.mdx)("p",null,"Using dynamic dependency versions is ",(0,i.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,i.mdx)("a",{parentName:"p",href:"../../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import the Assurance library along with the other Mobile SDK libraries:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.Assurance;\nimport com.adobe.marketing.mobile.MobileCore;\n")),(0,i.mdx)(d,{platform:"ios",task:"import-library",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"Add the library to your project via your ",(0,i.mdx)("a",{parentName:"p",href:"https://cocoapods.org/pods/AEPAssurance"},"Cocoapods")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore','~> 5.0'\npod 'AEPAssurance','~> 5.0'\n")),(0,i.mdx)("p",null,"Import the Assurance extension along with the other Adobe Mobile SDK extensions:"),(0,i.mdx)("h4",{id:"swift"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPAssurance\n")),(0,i.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPAssurance;\n")),(0,i.mdx)(d,{platform:"android",task:"register-assurance",repeat:"4",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n    private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        MobileCore.setApplication(this);\n        MobileCore.setLogLevel(LoggingMode.VERBOSE);\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n        List<Class<? extends Extension>> extensions = Arrays.asList(\n                Assurance.EXTENSION,...);\n        MobileCore.registerExtensions(extensions, o -> {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n        });\n    }\n}\n')),(0,i.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'class MyApp : Application() {\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.setLogLevel(LoggingMode.VERBOSE)\n        MobileCore.configureWithAppID("YOUR_APP_ENVIRONMENT_ID")\n\n        val extensions = listOf(Assurance.EXTENSION, ...)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,i.mdx)(d,{platform:"ios",task:"register-assurance",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("p",null,"To start using the extension library, you must first register the extension with the ",(0,i.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," extension."),(0,i.mdx)("h4",{id:"swift-1"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n\n        let extensions = [Assurance.self, ...]\n        MobileCore.registerExtensions(extensions, {\n            // set app id from the Data Collection UI    \n                MobileCore.configureWith(appId: "yourAppId")  \n        })\n\n        return true\n    }\n')),(0,i.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\n    NSArray *extensionsToRegister = @[AEPMobileAssurance.class, ...];\n    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{\n        // set app id from the Data Collection UI\n        [AEPMobileCore configureWithAppId: @"yourAppId"];\n    }];\n\n    return YES;\n}\n')),(0,i.mdx)(d,{platform:"android",task:"implement-assurance",repeat:"1",mdxType:"Variant"}),(0,i.mdx)("p",null,"Deep linking is the best way to connnect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"add an intent filter for incoming links in your app")," to complete the deep link configuration. The combination of ",(0,i.mdx)("inlineCode",{parentName:"p"},"android:host")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"android:scheme")," (in the form of ",(0,i.mdx)("inlineCode",{parentName:"p"},"<host>://<scheme>"),") for this intent filter will serve as the Base URL while creating a session in the ",(0,i.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/assurance"},"Adobe Experience Platform Assurance UI")),(0,i.mdx)(d,{platform:"ios",task:"implement-assurance",repeat:"13",mdxType:"Variant"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"./api-reference.md#startsession"},"startSession")," API needs to be called to begin an Adobe Experience Platform Assurance session. You should call this API when the app launches with a URL (see code snippet below for sample usage). When called, SDK displays a PIN authentication overlay to begin a session."),(0,i.mdx)("h4",{id:"swift-2"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {\n        Assurance.startSession(url: url)\n        return true\n    }\n")),(0,i.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n        // Called when the app in background is opened with a deep link.\n        if let deepLinkURL = URLContexts.first?.url {\n            Assurance.startSession(url: deepLinkURL)\n        }\n    }\n\n    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {\n        // Called when the app launches with the deep link\n        if let deepLinkURL = connectionOptions.urlContexts.first?.url {\n            Assurance.startSession(url: deepLinkURL)\n        }\n    }\n")),(0,i.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"static func startSession(url: URL?)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {\n    [AEPMobileAssurance startSessionWithUrl:url];\n    return true;\n}\n")),(0,i.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"\n- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {    \n    NSURL *deepLinkURL = connectionOptions.URLContexts.allObjects.firstObject.URL;\n    [AEPMobileAssurance startSessionWithUrl:deepLinkURL];\n}\n\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n    [AEPMobileAssurance startSessionWithUrl:URLContexts.allObjects.firstObject.URL];\n}\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-assurance-index-md-45b46aa7f12ab1d5b672.js.map