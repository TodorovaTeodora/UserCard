function templateDecorator(template: string, domSelector: string) {
    return function (constructor: any) {
        const domElement = document.getElementById(domSelector);
        const objConstructor = new constructor();
        if (domElement) {
            domElement.innerHTML = template;
            domElement.querySelector("span#name").textContent = objConstructor.name;
            domElement.querySelector("span#profile").textContent = objConstructor.profile;
            domElement.querySelector("span#skills").textContent = objConstructor.skills;
            domElement.querySelector("span#platform").textContent = objConstructor.platforms.join(" ");
            domElement.querySelector("span#fansCount").textContent = objConstructor.fans;
            domElement.querySelector("span#followingCount").textContent = objConstructor.following;
            domElement.querySelector("span#followersCount").textContent = objConstructor.followers;
            domElement.querySelector("a#facebook").textContent = objConstructor.facebook;
            domElement.querySelector("a#twitter").textContent = objConstructor.twitter;
            domElement.querySelector("a#googlePlus").textContent = objConstructor.googlePlus;
        }
    }
}


@templateDecorator(
    `
    <div class="card">
        <div id="positioned">
            <div id="left">
                <h1>Name: <span id="name"></span></h1>
                <p>Profile: <span id="profile"></span></p>
                <p>Skills: <span id="skills"></span></p>
            </div>
            <div id="right">
                <img src="picture.png" alt="photo">
            </div>
        </div>
        <p>Platform: <span id="platform"></span></p>
        <div id="social">
            <section id="fans">
                <span id="fansCount"></span>
                <p>Fans</p>
            </section>
            <section id="following">
                <span id="followingCount"></span>
                <p>Following</p>
            </section>
            <section id="followers">
                <span id="followersCount"></span>
                <p>Followers</p>
            </section>
        </div>
        <div id="links">
            <section id="fbLink">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                <a href="" id="facebook"></a>
            </section>
            <section id="twitterLink">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <a href="" id="twitter"></a>
            </section>
            <section id="googleLink">
                <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                <a href="" id="googlePlus"></a>
            </section>
        </div>
    </div>`,
    "testDecorator"
)
// @ts-ignore
class UserCard {
    name = "Baby Yoda";
    profile = "Baby Yoda";
    skills = "Making everyone adore him!";
    platforms = ["WordPress", "Weebly", "Bootstrap", "Wix"];
    fans = "15M";
    following = "1.8K";
    followers = "30M";
    facebook = "Like";
    twitter = "Tweet";
    googlePlus = "Follow"
}
