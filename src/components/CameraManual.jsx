function CameraManual() {
  return (
    <aside className="camera-manual" aria-labelledby="camera-manual-title">
      <p className="camera-manual__kicker">Shreyaa’s How-To</p>
      <h2 id="camera-manual-title">Camera Manual</h2>

      <ol className="camera-manual__steps">
        <li>
          <span>01</span>
          Press <strong>ON</strong> to develop the portfolio.
        </li>
        <li>
          <span>02</span>
          Use <strong>HM, EX, PR, SK,</strong> or <strong>CT</strong> to jump around.
        </li>
        <li>
          <span>03</span>
          Scroll through the scrapbook below.
        </li>
        <li>
          <span>04</span>
          Select a project photo to open its case study.
        </li>
      </ol>

      <p className="camera-manual__note">
        Tip: every camera control is keyboard accessible.
      </p>
    </aside>
  )
}

export default CameraManual
