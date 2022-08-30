# Micro-frontend Template

The sizzling hotness these days in the FE world is "Micro". This is a template based on that architecture using best practices as of late 2022.

## Run Steps
### TO-DO...

## Gotchas
### TO-DO...


## Principle Requirements for Best Practices
### Architecture Choices

> ### 1. Zero coupling between child projects
>> No importing of functions/objects/classes/etc
> 
>> No shared State
>
>> Shared libraries through MF is okay
>   
> ### 2. Near-zero coupling between container and child apps
>> Container shouldn't assume that a child is using a particular framework
>
>> Any necessary communication done with callbacks or simple events
> ### 3. CSS from one project shouldn't affect another
>
> ### 4. Version control (monorepo vs separate) shouldn't have any impact on the overall project
>> Some people want to use monorepos
>
>> Some people want to keep everything in separate repos
> ### 5. Container should be able to decide to always use the latest version of a microfrontend ___or___ specify a version
>
>> A: Container will always use the latest version of a child app (doesn't require a redeploy of container)
>
>> B: Container can specify exactly what version of a child it wants to use (requires a redeploy to change)

### CI/CD

>> Want to deploy each microfrontend independently (including the container)
>
>> Location of child app remoteEntry.js files must be known at _build_ time!
>
>> Many front-end deployment solutions assume you're deploying a single project - we need somethign that can handle multiple different ones
>
>> Has an automated pipeline
>
>> At _present_, the remoteEntry.js file name is fixed! need to think about caching issues

### Multi-Tier Navigation Across Microfrontends

> ### 1. Both the Container + Individual SubApps need routing features
>
>> Users can navigate around to different subapps using routing logic built into Container
>
>> Users can navigate around in a subapp using routing logic built into the subapp itself
>
>> Not all subapps will require routing
>
> ### 2. Sub-apps might need to add in new pages/routes all the time
>
>> New routes added to a subapp shouldn't require a redeploy of the container!
>
> ### 3. We might need to show two or more microfrontends at the same time
>
>> This will occur all the time if we have some kind of sidebar nav that is built as a separate microfrontend
>
> ### 4. We want to use off-the-shelf routing solutions
>
>> Building a routing library can be hard- we don't want to author a new one!
>
>> _Some_ amount of custom coding is OK
>
> ### 5. We need navigation features for sub-apps in both hosted mode and in isolation
>
>> Developing for each environment should be easy - a developer should immediately be able to see what path they are visiting
>
> ### 6. If different apps need to communicate information about routing, it should be done in as ageneric a fashion as possible
>
>> each app might be using a completely different navigation framework
>
>> We might swap out or upgrade navigation libraries all, the time - shouldn't require a rewrite of the rest of the app


 

