import { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3 col-md-12">
                <a href="/" className="brand-wrap">
                  <img
                    className="logo"
                    src={require("../../assets/images/logo.png")}
                    alt=""
                  />
                </a>
                {/* brand-wrap.// */}
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                {/* search-wrap .end// */}
              </div>
              {/* col.// */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <a href="/ho-so-chinh" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                        <span className="notify">3</span>
                      </div>
                      <small className="text"> Tài khoản </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="#" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-comment-dots" />
                        <span className="notify">1</span>
                      </div>
                      <small className="text"> Tin nhắn </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="/ho-so-dat-hang" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-store" />
                      </div>
                      <small className="text"> Đặt hàng </small>
                    </a>
                  </div>
                  <div className="widget-header mr-3">
                    <a href="/gio-hang" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <small className="text"> Giỏ hàng </small>
                    </a>
                  </div>
                </div>
                {/* widgets-wrap.// */}
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* container.// */}
        </section>
        {/* header-main .// */}
       {/* <nav className="navbar navbar-main navbar-expand-lg border-bottom">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="fa fa-bars text-muted mr-2" /> Demo pages
                  </a>
                  <div className="dropdown-menu dropdown-large">
                    <nav className="row">
                      <div className="col-6">
                        <a href="/">Home page 1</a>
                        <a href="/">Home page 2</a>
                        <a href="/category">All category</a>
                        <a href="/listing-large">Listing list</a>
                        <a href="/listing-grid">Listing grid</a>
                        <a href="shopping-cart">Shopping cart</a>
                        <a href="/product-detail/1">Product detail</a>
                        <a href="/content">Page content</a>
                        <a href="/login">Page login</a>
                        <a href="/register">Page register</a>
                      </div>
                      <div className="col-6">
                        <a href="profile-main">Profile main</a>
                        <a href="profile-order">Profile orders</a>
                        <a href="profile-seller">Profile seller</a>
                        <a href="profile-wishlist">
                          Profile wishlist
                        </a>
                        <a href="profile-setting">Profile setting</a>
                        <a href="profile-address">Profile address</a>
                        <a href="rtl-page-index-1.html">RTL home page</a>
                        <a href="page-components.html" target="_blank">
                          More components
                        </a>
                      </div>
                    </nav>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ready to ship
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Trade shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sell with us
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Get the app
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="http://example.com"
                    data-toggle="dropdown"
                  >
                    English
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Russian
                    </a>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                    <a className="dropdown-item" href="#">
                      Chinese
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>*/}
      </header>
    );
  }
}

export default Header;
