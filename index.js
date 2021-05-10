// import node-appwrite
const sdk = require('node-appwrite');

// setup variables from environment, should be set in dashboard
const endPoint = process.env.ENDPOINT_URL;
const apiSecretKey = process.env.API_SECRET_KEY;
const collectionId = process.env.COLLECTION_ID;
// project id is already available as env variable 
// https://appwrite.io/docs/functions
const projectId = process.env.APPWRITE_FUNCTION_PROJECT_ID;
// docId should be passed with function execution call
const docId = process.env.APPWRITE_FUNCTION_DATA;

// initialize client and database
let client = new sdk.Client();
client
    .setEndpoint(endPoint)
    .setProject(projectId)
    .setKey(apiSecretKey).setSelfSigned(true)
    ;
let database = new sdk.Database(client);

// get the document with the [docId]
let getDocPromise = database.getDocument(collectionId, docId);

getDocPromise.then(function (response) {

    const prevDownloadCount = response['download_count'];
    // increase [download_count] by 1 and reassign [refreshed_time]
    const dataToUpdate = { 'download_count': prevDownloadCount + 1, 'refreshed_time': Math.floor(Date.now() / 1000) };
    // update the document
    let updateDocPromise = database.updateDocument(collectionId, docId, dataToUpdate);

    updateDocPromise.then(function (response) {
        console.log('doc updated');
    }, function (error) {
        console.log(error);
    });

}, function (error) {
    console.log(error);
});
