import BotanicalFlower from '../assets/botanical-flower.png'

function CameraManual() {
  return (
    <aside className="camera-manual" aria-labelledby="camera-manual-title">
      <img
        className="camera-manual__botanical"
        src={BotanicalFlower}
        alt=""
        aria-hidden="true"
      />

      <header className="camera-manual__header">
        <p className="camera-manual__kicker">Field guide · Issue 01</p>
        <h2 id="camera-manual-title">Camera Manual</h2>
        <p className="camera-manual__intro">
          A quick guide to developing Shreyaa’s portfolio.
        </p>
      </header>

      <ol className="camera-manual__steps">
        <li>
          <span className="camera-manual__icon" aria-hidden="true">▶</span>
          <div>
            <strong>Power up</strong>
            <p>Press ON to wake the LCD.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true">◎</span>
          <div>
            <strong>Take a picture</strong>
            <p>Press the ↓ shutter button to print your portfolio photo.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true">⌁</span>
          <div>
            <strong>Develop</strong>
            <p>Select the polaroid to reveal the scrapbook.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true">✦</span>
          <div>
            <strong>Explore</strong>
            <p>Use the camera controls or scroll through each chapter.</p>
          </div>
        </li>
      </ol>

      <div className="camera-manual__legend" aria-label="Camera button legend">
        <span><b>EX</b> Experience</span>
        <span><b>PR</b> Projects</span>
        <span><b>SK</b> Skills</span>
        <span><b>CT</b> Contact</span>
      </div>

      <p className="camera-manual__note">
        Press OFF anytime to tuck the scrapbook away.
      </p>
    </aside>
  )
}

export default CameraManual
