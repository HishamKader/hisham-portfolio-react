import "./style.css"

function foot() {
  return (
    <div>
    {/* <div id="back"></div> */}
      <footer className="footer">
        <div className="container">

          <div className="row">
            <div className="col-sm-6">
              <div>Hisham Abdel-Kader, 2021 &copy;</div>
            </div>

            <div className="col-sm-6">
              <p>Get Connected:</p>
              <ul>
                <li><a href="https://www.linkedin.com/in/hisham-abdel-kader-14ab821b3/">LinkedIn</a></li>
                <li><a href="https://github.com/HishamKader">GitHub</a></li>
                <li><a href="https://hishamkader.github.io/contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default foot;