const axios = require('axios');

exports.homePagesList = function (req, res) {
  const url = process.env.CMS_API + "/home-pages";
  axios.get(url)
    .then(function (response) {
    // handle success
    console.log(response.data[0]);
    const resultData = response.data[0]["page_content"];
    res.render('index', {title : resultData});
  }).catch(function (error) {
    // handle error
    console.log(error);
  })

}
