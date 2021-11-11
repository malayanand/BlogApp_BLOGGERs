import React, { useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory } from "react-router";
import axios from "axios";

export default function LogOut() { 
    const history = useHistory();

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/login');
    });

    return <div>Logout</div>;
}
