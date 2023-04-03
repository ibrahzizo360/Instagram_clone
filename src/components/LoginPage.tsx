interface Props {
  heading: string;
}
function ListGroup({ heading }: Props) {
  return (
    <>
      <div className="Component">
        <div className="instagram_writing">
          <img
            className="insta_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <label htmlFor="username"></label>
        <input
          className="Username"
          type="username"
          placeholder="Phone number, username, or email"
        />
        <label htmlFor="Password"></label>
        <input className="Username" type="password" placeholder="Password" />
        <button className="loginbutton">Log in</button>
        <div className="horizontal_rule">
          <hr className="First_rule" />
          <span className="separator">OR</span>
          <hr className="First_rule" />
        </div>
        <p className="loginfacebook">
          <img
            className="facebook_logo"
            src="./src/assets/facebook.png"
            alt=""
          />{" "}
          Log in with Facebook{" "}
        </p>
        <h6 className="forgotpass">Forgot Password?</h6>
      </div>
      <div className="Signup">
        <p className="donthaveaccount">
          Don't have an account?{" "}
          <a className="signuppage" href="index.html">
            Sign up
          </a>{" "}
        </p>
      </div>
      <center>
        <p className="getapp">Get the app.</p>
        <div className="stores">
          <div className="googlestore">
            <img
              className="playstore"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            />
          </div>
          <div>
            <img
              className="microsoft"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            />
          </div>
        </div>
      </center>
      <div className="links">
        <a href="#" className="dec-effect">
          Meta
        </a>
        <a href="#" className="dec-effect">
          About
        </a>
        <a href="#" className="dec-effect">
          Blog
        </a>
        <a href="#" className="nodec-effect">
          Jobs
        </a>
        <a href="#" className="dec-effect">
          Help
        </a>
        <a href="#" className="dec-effect">
          API
        </a>
        <a href="#" className="nodec-effect">
          Privacy
        </a>
        <a href="#" className="nodec-effect">
          Terms
        </a>
        <a href="#" className="nodec-effect">
          Top Accounts
        </a>
        <a href="#" className="nodec-effect">
          Locations
        </a>
        <a href="#" className="nodec-effect">
          Instagram Lite
        </a>

        <a href="#" className="nodec-effect">
          Contact Uploading & Non-Users
        </a>
        <a href="#" className="dec-effect">
          Meta Verified
        </a>
      </div>
      <span id="below">© 2023 Instagram from Meta</span>
    </>
  );
}
export default ListGroup;
