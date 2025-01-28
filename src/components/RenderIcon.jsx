import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiPlayCircle } from "react-icons/hi2";
import { ImPlay } from "react-icons/im";
export default function RenderIcon({ id, style }) {
    console.log("style", style);
    const iconStyles = {
        color: style.iconColor,
        width: style.iconSize,
        height: style.iconSize,
        backgeroundColor: style.playIconBackgroundColor,
        borderRadius: "50%"
    }
    const playIcons = [
        {
            id: 'one',
            svg: <FaPlay style={{ ...iconStyles }} />,
        },
        {
            id: 'two',
            svg: <FaPlayCircle style={{ ...iconStyles }} />,
        },
        {
            id: 'three',
            svg: <FaRegPlayCircle style={{ ...iconStyles }} />,
        },
        {
            id: 'four',
            svg: <FaRegCirclePlay style={{ ...iconStyles }} />,
        },
        {
            id: 'five',
            svg: <HiPlayCircle style={{ ...iconStyles }} />,
        },
        {
            id: 'six',
            svg: <ImPlay style={{ ...iconStyles }} />,
        },
    ]

    return <div style={{ ...iconStyles }}>
        {
            playIcons?.find(icon => icon.id === id)?.svg || null
        }
    </div>
}
