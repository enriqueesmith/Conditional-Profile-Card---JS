import "../style/index.scss";

/**
 *  1) Here are all the variables to be used in the conditions
 */
function render(variables = {}) {
  /**
   *  2) The conditional rendering logic starts here
   */
  console.log(variables);
  // here we ask the logical questions to make decitions on how to build the heml
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let nameOutput = "Lucy";
  if (variables.name !== null) nameOutput = variables.name;

  let lastNameOutput = "Boilett";
  if (variables.lastname !== null) lastNameOutput = variables.lastname;

  let twitterName = "alesanchezr";
  if (variables.twitter !== null) twitterName = variables.twitter;

  let githubName = "alesanchezr";
  if (variables.github !== null) githubName = variables.github;

  let linkedinName = "alesanchezr";
  if (variables.linkedin !== null) linkedinName = variables.linkedin;

  let instagramName = "alesanchezr";
  if (variables.instagram !== null) instagramName = variables.instagram;

  let cityName = "Miami";
  if (variables.city !== null) cityName = variables.city;

  let countryName = "USA";
  if (variables.country !== null) countryName = variables.country;

  let roleName = "Web Developer";
  if (variables.role !== null) roleName = variables.role;

  let socialMediaPositionName = "Null";
  if (variables.socialMediaPosition !== null) {
    socialMediaPositionName = variables.socialMediaPosition;
  } else {
    socialMediaPositionName = "hidden";
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nameOutput} ${lastNameOutput}</h1>
          <h2>${roleName}</h2>
          <h3>${cityName}, ${countryName}</h3>
          <ul class="${socialMediaPositionName}">
            <li><a href="https://twitter.com/{${twitterName}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubName}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedinName}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagramName}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}
//Here is where we do the logic for the dropdowns
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: null,
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
