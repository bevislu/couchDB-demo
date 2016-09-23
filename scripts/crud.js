

//const alertInstance = (
//  <Alert bsStyle="warning">
//    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
//  </Alert>
//);
//ReactDOM.render(alertInstance, document.getElementById("pageContent"));

// ajaxRequest('GET', '/db/_all_dbs').then(function(resp) {
    // console.log(resp);
// }, function() {
    // console.log('Error');
// });

// Create
// (function createAnAccount() {
    // ajaxRequest('GET', '/db/_uuids').then(function(resp) {
        // console.log(resp);
        // var id = resp.uuids[0];
        // ajaxRequest('PUT', '/db/accounts/' + id, JSON.stringify({
            // name: 'Kevin',
            // age: 20
        // })).then(function(r) {
            // console.log(r);
        // }, function() {
            // console.log('Failed!!');
        // });
    // }, function() {
        // console.log('Error');
    // });
// })();

// List
// ajaxRequest('GET', '/db/accounts/_all_docs?limit=11&include_docs=true', "").then(function(resp) {
    // console.log(resp);
// }, function() {
    // console.log('Error');
// });

// Read a certain doc
// ajaxRequest('GET', '/db/accounts/8db1e93c7937cb0eece950bdbb0013e3', "").then(function(resp) {
    // console.log(resp);
// }, function() {
    // console.log('Error');
// });

// Update
// (function() {
    // ajaxRequest('GET', '/db/accounts/8db1e93c7937cb0eece950bdbb0013e3', "").then(function(resp) {
        // var rev = resp._rev;
        // ajaxRequest('PUT', '/db/accounts/8db1e93c7937cb0eece950bdbb0013e3', JSON.stringify({name: 'Bevis_Updated', grade: 10, _rev: rev})).then(function(r) {
            // console.log(r);
        // }, function() {
            // console.log('Update Failed');
        // });
    // }, function() {
        // console.log('Error');
    // });
// })();

// Filtering
// ajaxRequest('GET', '/db/accounts/_design/accounts/_list/test_search/by_name?name=J', "").then(function(resp) {
    // console.log(resp);
// }, function() {
    // console.log('Error');
// });