interface Props {
  heading: string;
}
function ListGroup({ heading }: Props) {
  return (
    <>
      <div className="Component">
        <h1 className="heading">{heading}</h1>
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
      <p className="terms">
        Meta About Blog Jobs Help API Privacy Terms Top Accounts Locations
        Instagram Lite
      </p>
      <p className="contact">Contact Uploading & Non-Users Meta Verified</p>
      <p className="copyright">English © 2023 Instagram from Meta</p>
    </>
  );
}
export default ListGroup;
