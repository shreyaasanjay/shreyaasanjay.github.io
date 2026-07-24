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
        <p className="camera-manual__kicker">Shreyaa's Portfolio</p>
        <h2 id="camera-manual-title">Camera Manual</h2>
        <p className="camera-manual__intro">
          Guide on developing my portfolio!
        </p>
      </header>

      
      <ol className="camera-manual__steps">
        <li>
          <span className="camera-manual__icon" aria-hidden="true"> 1</span>
          <div>
            <strong>Power up the camera</strong>
            <p>Press ON.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true"> 2</span>
          <div>
            <strong>Take a picture</strong>
            <p>Press the shutter button to print your portfolio photo.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true"> 3</span>
          <div>
            <strong>Develop</strong>
            <p> Click on the polaroid to reveal the scrapbook.</p>
          </div>
        </li>
        <li>
          <span className="camera-manual__icon" aria-hidden="true">4 </span>
          <div>
            <strong>Explore</strong>
            <p>Use the camera controls or scroll through each section.</p>
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
        Press OFF anytime to close the scrapbook.
      </p>
    </aside>
  )
}

export default CameraManual
