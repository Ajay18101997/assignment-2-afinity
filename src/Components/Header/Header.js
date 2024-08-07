import React, { useState } from "react";
import "./Header.scss";
import { Logo, Settingbtn, Notification } from "../../assets/Icon";
import ProfileImage from "../../assets/Images/profile.png";
import SearchInput from "../SearchInput/SearchInput";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = ({ activeOption }) => {
  const [selectedMenu, setSelectedMenu] = useState("Menu 1");
  const NotificationData = [
    <h2>Notifications</h2>,
    <div className="notification-wrap">
      <p className="title">Lorem Ipsum</p>
      <div className="bottom-wrap">
        <p>Lorem Ipsum</p>
        <p>1d ago</p>
      </div>
    </div>,
    <div className="notification-wrap">
      <p className="title">Lorem Ipsum</p>
      <div className="bottom-wrap">
        <p>Lorem Ipsum</p>
        <p>1d ago</p>
      </div>
    </div>,
    <div className="notification-wrap">
      <p className="title">Lorem Ipsum</p>
      <div className="bottom-wrap">
        <p>Lorem Ipsum</p>
        <p>1d ago</p>
      </div>
    </div>,
    <div className="notification-wrap">
      <p className="title">Lorem Ipsum</p>
      <div className="bottom-wrap">
        <p>Lorem Ipsum</p>
        <p>1d ago</p>
      </div>
    </div>,
  ];

  const profileData = [
    <div className="profile-wrap">
      <div className="top-wrapper">
        <div className="left-wrapper">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="right-wrapper">
          <h3>Grace John</h3>
          <p>+91 9827839223 | gracejohn@gmail.com</p>
        </div>
      </div>
      <div className="dropdown-item">
        <select
          className="dropdown-select"
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
        >
          <option>Menu 1</option>
          <option>Menu 2</option>
          <option>Menu 3</option>
        </select>
      </div>
    </div>,
  ];

  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="left-wrap">
            <div className="logo-wrap">
              <div dangerouslySetInnerHTML={{ __html: Logo() }}></div>
            </div>
            <p className="activeHead">{activeOption}</p>
          </div>
          <div className="right-wrap">
            <SearchInput></SearchInput>
            <DropdownMenu
              buttonTitle={
                <>
                  <div dangerouslySetInnerHTML={{ __html: Settingbtn() }}></div>
                </>
              }
            />
            <DropdownMenu
              buttonTitle={
                <>
                  <div
                    dangerouslySetInnerHTML={{ __html: Notification() }}
                  ></div>
                </>
              }
              items={NotificationData}
              showCloseButton={true}
            />
            <DropdownMenu
              buttonTitle={
                <>
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="profile-image"
                  />
                </>
              }
              items={profileData}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
