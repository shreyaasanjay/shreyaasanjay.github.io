function CameraManual() {
  return (
    <aside className="camera-manual" aria-labelledby="camera-manual-title">
      <p className="camera-manual__kicker">Shreyaa's How-To</p>
      <h2 id="camera-manual-title">Camera Manual</h2>

      <ol className="camera-manual__steps">
        <li>
          <span>01</span>
          Press <strong>ON</strong> to wake the LCD.
        </li>
        <li>
          <span>02</span>
          Choose <strong>HM, EX, PR, SK,</strong> or <strong>CT</strong>.
        </li>
        <li>
          <span>03</span>
          Read or scroll through the selected section.
        </li>
        <li>
          <span>04</span>
          Press <strong>OFF</strong> when you are finished exploring.
        </li>
      </ol>

      <p className="camera-manual__note">
        Tip: the camera buttons are keyboard accessible too.
      </p>
    </aside>
  )
}

export default CameraManual
