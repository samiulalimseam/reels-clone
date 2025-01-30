import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiPlayCircle } from "react-icons/hi2";
import { ImPlay } from "react-icons/im";
export default function RenderIcon(props) {
    const { id, style } = props || {}
    const iconStyles = {
        color: style?.iconColor,
        width: style?.iconSize || "30px",
        height: style?.iconSize || "30px",
        backgeroundColor: style?.playIconBackgroundColor,
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
        {
            id: 'pauseIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
                <path d="M14 19V5h4v14zm-8 0V5h4v14z" />
            </svg>
        },
        {
            id: 'speakerIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27}  {...props}>
                <path
                    d="M15 4.25v15.496c0 1.079-1.274 1.651-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.189H4.25A2.25 2.25 0 0 1 2 14.247V9.749A2.25 2.25 0 0 1 4.25 7.5h3.68a.75.75 0 0 0 .498-.19l4.491-3.993C13.726 2.6 15 3.172 15 4.25m3.992 1.648a.75.75 0 0 1 1.049.156A9.96 9.96 0 0 1 22 12.001a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.893 8.46 8.46 0 0 0 1.665-5.053 8.46 8.46 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.05M17.143 8.37a.75.75 0 0 1 1.017.302c.536.99.84 2.125.84 3.329a7 7 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714 5.5 5.5 0 0 0 .66-2.614c0-.948-.24-1.838-.66-2.615a.75.75 0 0 1 .303-1.016"
                />
            </svg>
        },
        {
            id: '3dotsIcon1',
            svg: <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24} height={24}
                {...props}
            >
                <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M11.99 12h.011M11.981 19.2h.011M12 4.8h.01"
                />
            </svg>
        },
        {
            id: 'playIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
                <path d="M8 5.14v14l11-7z" />
            </svg>

        },
        {
            id: 'muteIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
                <path
                    d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.724 5.725H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.749 2.105.182 2.105-.912v-5.623l8.22 8.22a.75.75 0 0 0 1.06-1.061zm7.342 5.22 5.878 5.878V4.814c0-1.094-1.307-1.66-2.105-.912zm9.55 9.55 1.137 1.137A9.5 9.5 0 0 0 22.25 14a9.46 9.46 0 0 0-1.897-5.697.75.75 0 1 0-1.2.9A7.96 7.96 0 0 1 20.75 14a8 8 0 0 1-.578 2.99m2.803 2.803 1.095 1.096a13.2 13.2 0 0 0 1.93-6.89c0-3.351-1.246-6.414-3.298-8.747a.75.75 0 1 0-1.126.99A11.7 11.7 0 0 1 24.5 14a11.7 11.7 0 0 1-1.525 5.793"
                />
            </svg>

        },
        {
            id: 'closeIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"} {...props}>
                <path
                    d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6z"
                />
            </svg>

        },
        {
            id: 'downArrowIcon1',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
      />
    </g>
  </svg>

        },
    ]

    return <div style={{ ...iconStyles }}>
        {
            playIcons?.find(icon => icon.id === id)?.svg || null
        }
    </div>
}
