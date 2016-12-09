```
  ______    ______    _____    ______    __    __
 /\  == \  /\  __ \  /\  __-. /\  ___\  /\ "-./  \
 \ \  __<  \ \  __ \ \ \ \/\ \\ \  __\  \ \ \-./\ \
  \ \_____\ \ \_\ \_\ \ \____- \ \_____\ \ \_\ \ \_\
   \/_____/  \/_/\/_/  \/____/  \/_____/  \/_/  \/_/
```

## badem v0.4.3

* Add `props` support to the component creators.
* Using `console.log` by default instead of `console.warn` (*I have reasons — mostly-related to c9.io interop; I’ll provide the ability to use `console.warn` as a config option later*).
* Fixed minor bugs in the build script, so that npm has the correct scripts in the `dist` folder right now.

## badem v0.3.0

* Initial working version.
* Exported source code for JavaScript (EcmaScript2016+) and also Node.JS (commonjs2).
* Created an `.npmignore` file so that the npm package can include the distribution dependencies, whereas the source code will not.