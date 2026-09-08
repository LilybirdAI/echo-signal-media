export const metadata = {
  title: "Embr Vision Support",
  description: "Support information for Embr Vision.",
};

export default function EmbrVisionSupportPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "48px 24px 80px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <h1>Embr Vision Support</h1>

      <p>
        For help with Embr Vision, contact{" "}
        <a href="mailto:matt@embrintelligence.ai">
          matt@embrintelligence.ai
        </a>
        .
      </p>

      <h2>Account Help</h2>
      <p>
        If you are having trouble creating an account, signing in, verifying
        your email, signing out, or deleting your account, contact us using the
        email above.
      </p>

      <h2>Password Help</h2>
      <p>
        Password recovery and reset options are available through the Embr
        Vision sign-in experience as supported by the current app version.
      </p>

      <h2>Camera, Microphone, and Location</h2>
      <p>
        Embr Vision may require camera, microphone, and location permissions for
        certain features. These permissions can be reviewed in your iPhone
        Settings.
      </p>

      <h2>Meta Glasses and Connected Devices</h2>
      <p>
        If connected-device features are not working, confirm that Bluetooth is
        enabled, the device is paired correctly, and the required permissions
        have been granted.
      </p>

      <h2>Delete Your Account</h2>
      <p>
        You can delete your Embr Vision account from the Account screen inside
        the app.
      </p>

      <h2>Privacy and Terms</h2>
      <p>
        <a href="/privacy/embr-vision">Privacy Policy</a>
        <br />
        <a href="/terms/embr-vision">Terms of Use</a>
      </p>
    </main>
  );
}
