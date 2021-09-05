// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apploginurl:"http://103.241.145.14:8080/auth/realms/skillzag-realm/protocol/openid-connect/token",
  //appbaseregurl:"http://103.241.145.14:8061/skillzag/auth/users/create",
  appbaseurl:"http://103.241.145.14:8061/",
  appbaseurl2:"http://103.241.145.14:8062/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
