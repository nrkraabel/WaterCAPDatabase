import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown" style={{ background: "red", width: "200px" }}>
        <div className="dropbutton" onClick={this.showDropdownMenu}>
          {" "}
          My Setting{" "}
        </div>

        {this.state.displayMenu ? (
          <ul className="dropul">
            <li className="dropli">
              <a className="droplia" href="#Create Page">
                Create Page
              </a>
            </li>
            <li className="dropli">
              <a className="droplia" href="#Manage Pages">
                test
              </a>
            </li>
            {
              <li className="dropli">
                <a className="droplia" href="#Create Ads">
                  Create Ads
                </a>
              </li>
            }
            <li className="dropli">
              <a className="droplia" href="#Manage Ads">
                Manage Ads
              </a>
            </li>
            <li>
              <a className="droplia" href="#Activity Logs">
                Activity Logs
              </a>
            </li>
            <li className="dropli">
              <a className="droplia" href="#Setting">
                Setting
              </a>
            </li>
            <li>
              <a className="droplia" href="#Log Out">
                Log Out
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
