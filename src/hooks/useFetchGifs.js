import {useState} from "react";

export const useFetchGifs = () => {
    const [state, useState] = useState({
        data: [],
        loading: true,
    });

    return state;
}