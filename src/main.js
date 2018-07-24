/*Ok, now that we've modeled out our application in ES Next, we need to make Aurelia render it. We weren't completely honest when we said above that we had showed you all the ES Next code. There's one final piece that gets it all going.

If you recall, when we looked at index.html there was an aurelia-app attribute on the body element. This attribute tells the aurelia-bootstrapper where to render the application and what main file to use to configure the app. The value of that attribute points to src/main. */

export function configure(aurelia) {
    aurelia.use.basicConfiguration();
    aurelia.start().then(() => aurelia.setRoot());
}

/*
When we provide a main file, like above, we are able to tell Aurelia how to configure itself by simply exporting a configure method. The framework will provide an instance of the Aurelia object which you can use in a variety of ways. There are many options, plugins and 3rd party extensions you can add, for example. In this case, we're configuring Aurelia with the "basic configuration". After that, we tell the framework to "start". Once it is started up we tell it to "set root".

So, what does "set root" mean? If you think of your UI as a hierarchy of components, what we're doing is configuring the "root" component of that hierarchy. This is the root of the UI component tree that Aurelia needs to render.

The next thought you might have is "but you didn't say what component to render!" That's a great point. One of the ways that Aurelia is able to stay out of the way is by having some basic conventions. In this case, we have a very simple convention. The root, by default, is app.js, relative to the main.js file. If you don't like that, as with all Aurelia conventions, you can override it with explicit configuration. For now, let's stick to the conventions.

Ok, we're almost ready to run our app. The next piece is to tell Aurelia how it should render app.js;*/
