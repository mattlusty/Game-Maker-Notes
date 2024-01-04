function init() {
  let word = "dinosaur";

  let list = ["one", "two", "three"];

  // API Keys
  const rapidApiKey = "6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b";
  const speechApiKey = "17e8c83f04474613b13eb338fe823dd1";

  // URLS
  let url =
    "https://voicerss-text-to-speech.p.rapidapi.com/?key=" +
    speechApiKey +
    "&src=" +
    word +
    "&hl=en-us&r=0&c=mp3&f=8khz_8bit_mono";

  // Words API Options Object
  const wordsOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  function search() {
    let result1 = fetch(url).then((response) => {
      return response.status;
    });
    let result2 = fetch(url).then((response) => {
      return response.status;
    });
    let result3 = fetch(url).then((response) => {
      return response.status;
    });
  }
}
