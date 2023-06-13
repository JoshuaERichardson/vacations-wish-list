/**
 * Asynchronous function API call to unsplash.
 * API documentation at https://unsplash.com/documentation
 * 
 * @param {*} queryName is the subject matter of desired returned photo
 * @param {*} queryLocation is the approximate location of the desired returned photo such as city or country
 * @returns a Promise.  Resolve returns JSON with image information.  Reject returns an error message.
 */
async function unsplashAPIGET(queryName, queryLocation){

    /*
     * Series of steps:
     * Munge the received parameters and concatenate into a valid unsplash endpoint
     */
    // Step 1: Trim the outsides
    queryName = queryName.trim();
    queryLocation = queryLocation.trim();
    // Step 2: Replace all white space with dashes
    queryName = queryName.replace(/\s+/g, '-').toLowerCase();
    queryLocation = queryLocation.replace(/\s+/g, '-').toLowerCase();
    // Step 3: Combine the Destination name and Location with %2
    const query = `${queryName}%2C${queryLocation}`;
    const UNSPLASH_API_KEY = 'IkAqe80mBCnusMn2h9ZcDgHqEhVQQ-5JeumBxjztgME';
    let url = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=${query}`;


    try {
        let response = await fetch(url);
        response = response.json();
        return response;
      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
}
export { unsplashAPIGET }