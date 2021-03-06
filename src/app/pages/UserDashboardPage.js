import React, {useState} from "react";
import { FaExclamationTriangle, FaRegEnvelopeOpen } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
    TextField
} from "@material-ui/core";

export function UserDashboardPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [discord, setDiscord] = useState("");
    const [avatar, setAvatar] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = name => event => {
        if(name === "username") {setUsername(event.target.value)}
        if(name === "email") {setEmail(event.target.value)}
        if(name === "discord") {setDiscord(event.target.value)}
        if(name === "avatar") {setAvatar(event.target.value)}
        if(name === "password") {setPassword(event.target.value)}
    }

    return <div className="userdash-container">
        <div>
            <h1 className="font-bold my-8">Your Account</h1>

            <div className="card light-green-bg p-8 d-flex flex-row text-white">
                <FaExclamationTriangle className="mt-1 mr-4" /><span> Please verify your email address to access the dashboard. <a className="text-underline" href="/#">Resend Email</a></span>
            </div>

            
            <div className="user-account mt-8 d-flex justify-content-between">
                <div className="overview">
                    <div className=" card">
                        <div className="card-header text-dark font-bold px-12 py-6">
                            Overview
                        </div>
                        <div className="card-body d-flex justify-content-between px-12 py-6">
                            <div>Created</div>
                            <div className="text-dark font-bold">58 minutes ago</div>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        <a href="/#">
                            <FaRegEnvelopeOpen /> SUBSCRIBE TO EMAILS
                        </a>
                    </div>
                </div>
                <div className="details card">
                    <div className="card-header text-dark font-bold px-12 py-6">
                        Account Details
                    </div>
                    <div className="card-body px-12 py-6">
                        <TextField
                            id="outlined-name"
                            label="Username"
                            className={"mb-4"}
                            value={username}
                            onChange={handleChange("username")}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Email Address"
                            className={"mb-4"}
                            value={email}
                            onChange={handleChange("email")}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Discord"
                            className={"mb-4"}
                            value={discord}
                            onChange={handleChange("discord")}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-name"
                            label="Avatar (Optional)"
                            className={"mb-4"}
                            value={avatar}
                            onChange={handleChange("avatar")}
                            margin="normal"
                            variant="outlined"
                        />
                        <div className="border-dotted mb-4"></div>
                        <TextField
                            id="outlined-name"
                            label="Update Password"
                            className={"mb-4"}
                            value={password}
                            onChange={handleChange("password")}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>

            <div className={"order-btn text-right mt-6"}>
                <Link to={"/#"}>
                    <button
                        type="button"
                        className="btn btn-transparent-white font-weight-bold px-12 py-4 light-blue-bg"
                    >
                        Update Account
                    </button>
                </Link>
            </div>
        </div>
    </div>
}