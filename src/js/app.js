import "../style/index.css";

function render(variables = {}) {
  console.log("Estas son las variables actuales: ", variables);

  const cover = variables.includeCover
    ? `<div class="cover"><img src="${variables.background}" /></div>`
    : '<div class="cover"></div>';

  const socialMediaLinks = `
    <ul class="${variables.socialMediaPosition}">
      ${
        variables.twitter
          ? `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`
          : ""
      }
      ${
        variables.github
          ? `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`
          : ""
      }
      ${
        variables.linkedin
          ? `<li><a href="https://es.linkedin.com/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`
          : ""
      }
      ${
        variables.instagram
          ? `<li><a href="https://www.instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`
          : ""
      }
    </ul>
  `;

  const profileCard = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${variables.name || ""} ${variables.lastName || ""}</h1>
      <h2>${variables.role || ""}</h2>
      <h3>${variables.city || ""}, ${variables.country || ""}</h3>
      ${socialMediaLinks}
    </div>
  `;

  document.querySelector("#widget_content").innerHTML = profileCard;
}

const initialVariables = {
  includeCover: true,
  background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
  avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
  socialMediaPosition: "position-left",
  twitter: null,
  github: null,
  linkedin: null,
  instagram: null,
  name: null,
  lastName: null,
  role: null,
  city: null,
  country: null
};

render(initialVariables);

document.querySelectorAll(".picker").forEach(function(elm) {
  elm.addEventListener("change", function(e) {
    const attribute = e.target.getAttribute("for");
    initialVariables[attribute] = this.value;
    render(initialVariables);
  });
});
