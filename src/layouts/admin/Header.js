import { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <header className="section-header-admin">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-12">
                <a href="/admin" className="brand-wrap">
                </a>
                {/* brand-wrap.// */}
              </div>
            </div>
      </header>
    );
  }
}

export default Header;
