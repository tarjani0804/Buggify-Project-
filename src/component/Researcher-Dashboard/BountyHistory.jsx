import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { BsJournalBookmark } from 'react-icons/bs';
import { RiFolderHistoryLine, RiLogoutBoxRLine, RiQuestionLine } from 'react-icons/ri';
import { IoSettingsOutline, IoNotificationsSharp } from 'react-icons/io5';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SiBigbluebutton } from 'react-icons/si';
import { ImProfile } from 'react-icons/im';
import { TbReportSearch } from 'react-icons/tb';
import { useNavigate } from "react-router-dom";


function ResearcherNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const Navigate = useNavigate();
    const gotoResearcherProfile = () => {
        Navigate('/researcherProfile')
    };
    const gotoTrackReports = () => {
        Navigate('/track-report')
    };
    const gotoBuountyHistory = () => {
        Navigate('/bounty-history')
    };
    const gotoBookmarkedProgram = () => {
        Navigate('/bookmarked-program')
    };
    const gotoNotification = () => {
        Navigate('/dashboard-notification')
    };
    const gotoSetting = () => {
        Navigate('/dashboard-settings')
    };

    const gotoFAQs = () => {
        Navigate('/researcherFAQs')
    }

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : 'close'}`}>

            <div className={`navbar-toggle ${isMenuOpen ? 'navopen' : 'navclose'}`} onClick={handleMenuToggle}>
                {isMenuOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li >
                    <span className="back-link-icon navbar-menu-icon"><AiOutlineArrowLeft /></span>
                    {isMenuOpen && <span className="back-link navbar-menu-item">Back to Home</span>}
                </li>
                <li >
                    <span className="company-icon navbar-menu-icon"><SiBigbluebutton /></span>
                    {isMenuOpen && <p className="company-name navbar-menu-item ">Buggify</p>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />
                <li onClick={gotoResearcherProfile}>
                    <span className="navbar-menu-icon"><ImProfile /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Researcher Profile</span>}
                </li>
                <li onClick={gotoTrackReports}>
                    <span className="navbar-menu-icon" style={{ color: "#ffffff" }}><TbReportSearch /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Track Report</span>}
                </li>

                <li className="dashboard-link" onClick={gotoBuountyHistory}>
                    <span className="navbar-menu-icon"><RiFolderHistoryLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bounty History</span>}
                </li>
                <li onClick={gotoBookmarkedProgram}>
                    <span className="navbar-menu-icon"><BsJournalBookmark /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Bookmarked Program</span>}
                </li>

                <li >
                    <span className="navbar-menu-icon"><RiLogoutBoxRLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
                </li>
                <hr className={`navbar-hr ${isMenuOpen ? 'open' : ''}`} />
                <li onClick={gotoNotification}>
                    <span className="navbar-menu-icon"><IoNotificationsSharp /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Notification</span>}
                </li>

                <li onClick={gotoSetting}>
                    <span className="navbar-menu-icon"><IoSettingsOutline /></span>
                    {isMenuOpen && <span className="navbar-menu-item">Settings</span>}
                </li>
                <li onClick={gotoFAQs}>
                    <span className="navbar-menu-icon"><RiQuestionLine /></span>
                    {isMenuOpen && <span className="navbar-menu-item">FAQs</span>}
                </li>
            </ul>

        </nav>);

}


const BountyHistory = (props) => {

    return (
        <>

            <div className="res-profile">

                <div className="bus-profile-divs">
                    <div className="bus-profile-div1">
                        <ResearcherNavbar />
                    </div>
                    <div className="bus-profile-div2">
                        <h1 className="bus-profile-div2-h">Bounty History</h1>
                        <div className="dashboard">
                            <center><div className="bus-profile-header">
                                <img src={props.researcherAvtar} className="bus-profile-company-logo" />
                                <h3 className="bus-profile-company-name">{props.rUsername}</h3>
                            </div></center>
                            <div className="track-report">
                                <div className="track-reports-div">

                                    {(BountyHistory.defaultProps.bounty.map((title) => (
                                        <div key={title.id} className="res-track-report-list-div">

                                            <div style={{ display: "flex", position: "relative", paddingTop: "2rem" }}>
                                                <p className="bus-profile-bug-report-div-title-p">Bounty Amount: {title.bAmount}</p>
                                                <p className="bus-profile-bug-report-div-id-p">Company Name: {title.companyName}</p>
                                            </div>
                                            <div className="bus-profile-bug-report-divtitle">
                                                <p className="bus-profile-bug-report-div-title-p">Date of Payment: {title.dop}</p>
                                                <p className="bus-profile-bug-report-div-id-p">Report Id: {title.rId}</p>
                                            </div>
                                        </div>
                                    )))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

BountyHistory.defaultProps = {
    researcherAvtar: '',
    rUsername: 'User Name',
    bounty: [
        {
            id: '1',
            bAmount: 'xyz$',
            companyName: 'xyz',
            dop: '2022-12-1',
            rId: 'xxxxx-xxxxx',
        },
        {
            id: '2',
            bAmount: 'abc$',
            companyName: 'abc',
            dop: '2021-10-1',
            rId: 'xxxxx-xxxxx',
        }
    ],
};

export default BountyHistory;
