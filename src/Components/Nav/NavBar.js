import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import './NavBar.css'

function NavBar () {
    return(
        <div className="navbar">
        <li className="nav-button">HOME</li>
        <li className="nav-button">RESOURCES</li>
        <li className="nav-button">
          INVOLVEMENT
          <ul className="sub-menu">
            <li className="sub-category">VOLUNTEER</li>
            <li className="sub-category">CONTRIBUTE</li>
            <li className="sub-category">BUSINESS</li>
            <li className="sub-category">INVEST</li>
          </ul>
        </li>
        <li className="nav-button">HISTORY</li>
        <li className="nav-button">CONTACTS</li>
        <li className="nav-button">
          PHOTO GALLERY
          <ul className="sub-menu">
            <li className="sub-category">EVENTS</li>
            <li className="sub-category">BUSINESS</li>
          </ul>
        </li>
        <li className="nav-button">PROGRAMS</li>
        <li className="nav-button">
          BUSINESS LISTING
          <ul className="sub-menu">
            <li className="sub-category">
              FOOD
              <BsChevronRight className="menu-chevron" />
              <ul className="sub-subMenu">
                <li className="sub-category">BIG HEAD PIZZA</li>
                <li className="sub-category">PERFECT DAY CAFE</li>
                <li className="sub-category">WHITE FRONT CAFE</li>
                <li className="sub-category">BOHEMIAN DONUTS</li>
                <li className="sub-category">BRICK STREET</li>
                <li className="sub-category">HOOSIER ST GRILL</li>
                <li className="sub-category">CRIMSON OAK</li>
              </ul>
            </li>
            <li className="sub-category">
              DRINK
              <BsChevronRight className="menu-chevron" />
              <ul className="sub-subMenu">
                <li className="sub-category">SUCCULENT SMOOTHIES</li>
                <li className="sub-category">MILLERS TAVERN</li>
                <li className="sub-category">CRIMSON OAK</li>
                <li className="sub-category">PHAT GUYS SPORTS BAR</li>
                <li className="sub-category">AMVETS</li>
               
              </ul>
            </li>
            <li className="sub-category">
              WORSHIP
              <BsChevronRight className="menu-chevron" />
              <ul className="sub-subMenu">
                <li className="sub-category">FIRST CHRISTIAN CHURCH</li>
                <li className="sub-category">THE LORDS CHAPEL</li>
                <li className="sub-category">SECOND UNITED METHODIST</li>
                <li className="sub-category">NV WESLEYAN CHURCH</li>
                <li className="sub-category">WAYSIDE CHRISTIAN FELLOWSHIP</li>
                <li className="sub-category">ST MARYS CATHOLIC CHURCH</li>
                <li className="sub-category">CHRIST BAPTIST CHURCH</li>
                <li className="sub-category">CHESTNUT STREET COMMUNITY CHURCH</li>
              </ul>
            </li>
            <li className="sub-category">
              RETAIL
              <BsChevronRight className="menu-chevron" />
              <ul className="sub-subMenu">
                <li className="sub-category">THE SHOP</li>
                <li className="sub-category">TREASURE HUNTERS</li>
                <li className="sub-category">NAPA AUTO PARTS</li>
                <li className="sub-category">MILLER TIRE</li>
                <li className="sub-category">PATRICIA'S PRETTIES</li>
                <li className="sub-category">VERNON SMOKE SHOP</li>
              </ul>
            </li>
            <li className="sub-category">
              SERVICES
              <BsChevronRight className="menu-chevron" />
              <ul className="sub-subMenu">
                <li className="sub-category">WISSELS AUTO</li>
                <li className="sub-category">RON'S AUTO</li>
                <li className="sub-category">MILLER TIRE</li>
                <li className="sub-category">DON's TIRE</li>
                <li className="sub-category">ROB & JOE'S BODYSHOP</li>
                <li className="sub-category">HYPNOTIC HAIR</li>
                <li className="sub-category">INNOVATIONS HAIR</li>
                <li className="sub-category">BABE BEAUTY BAR</li>
                <li className="sub-category">CREATIVE DESIGN</li>
                <li className="sub-category">THE PERFECT STYLE</li>
                <li className="sub-category">INDIANA HOMETOWN REALTY</li>
                <li className="sub-category">ARCHER CONSULTATION</li>
              </ul>
            </li>
          </ul>
        </li>
      </div>
    )
}

export default NavBar