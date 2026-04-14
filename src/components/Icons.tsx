type iconProps = {
    fill?: string;
    w?: string;
    h?: string;
    stroke?: string;
}

const WWWIcon = ({fill,w,h,stroke}:iconProps) => {
    return (
        <svg 
        width={w} 
        height={h} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0">
        </g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M4 15L20 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 9L20 9" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
        <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> 
        <path d="M12.0004 20.8182L11.2862 21.5181C11.4742 21.7101 11.7317 21.8182 12.0004 21.8182C12.2691 21.8182 12.5265 21.7101 12.7146 21.5181L12.0004 20.8182ZM12.0004 3.18188L12.7146 2.48198C12.5265 2.29005 12.2691 2.18188 12.0004 2.18188C11.7317 2.18188 11.4742 2.29005 11.2861 2.48198L12.0004 3.18188ZM14.6004 12.0001C14.6004 15.1611 13.3373 18.0251 11.2862 20.1183L12.7146 21.5181C15.1173 19.0662 16.6004 15.7053 16.6004 12.0001H14.6004ZM11.2861 3.88178C13.3373 5.97501 14.6004 8.83903 14.6004 12.0001H16.6004C16.6004 8.29478 15.1173 4.93389 12.7146 2.48198L11.2861 3.88178ZM9.40039 12.0001C9.40039 8.83903 10.6634 5.97501 12.7146 3.88178L11.2861 2.48198C8.88347 4.93389 7.40039 8.29478 7.40039 12.0001H9.40039ZM12.7146 20.1183C10.6634 18.0251 9.40039 15.1611 9.40039 12.0001H7.40039C7.40039 15.7053 8.88348 19.0662 11.2862 21.5181L12.7146 20.1183Z" 
        fill={fill}></path> </g></svg>
    )
}

const WebAppIcon = ({fill,w,h}:iconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            version="1.1" 
            width={w || "256"} 
            height={h || "256"} 
            viewBox="0 0 256 256"
            xmlSpace="preserve">
            <g style={{ stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	        <path d="M 90 59.49 H 0 V 12.605 c 0 -3.485 2.835 -6.32 6.32 -6.32 h 77.361 c 3.484 0 6.319 2.835 6.319 6.32 V 59.49 z M 4 55.49 h 82 V 12.605 c 0 -1.279 -1.04 -2.32 -2.319 -2.32 H 6.32 c -1.279 0 -2.32 1.041 -2.32 2.32 V 55.49 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 83.681 71.632 H 6.32 c -3.485 0 -6.32 -2.835 -6.32 -6.319 V 55.49 h 90 v 9.822 C 90 68.797 87.165 71.632 83.681 71.632 z M 4 59.49 v 5.822 c 0 1.279 1.041 2.319 2.32 2.319 h 77.361 c 1.279 0 2.319 -1.04 2.319 -2.319 V 59.49 H 4 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 58.511 83.715 H 31.489 c -0.865 0 -1.631 -0.556 -1.9 -1.377 c -0.27 -0.822 0.02 -1.724 0.717 -2.235 c 3.489 -2.562 5.818 -6.475 6.389 -10.736 c 0.133 -0.993 0.98 -1.734 1.982 -1.734 h 12.646 c 1.002 0 1.849 0.741 1.982 1.734 c 0.571 4.262 2.9 8.175 6.389 10.736 c 0.697 0.512 0.986 1.413 0.717 2.235 C 60.142 83.159 59.375 83.715 58.511 83.715 z M 36.437 79.715 h 17.126 c -1.89 -2.358 -3.238 -5.129 -3.909 -8.083 h -9.308 C 39.675 74.586 38.327 77.356 36.437 79.715 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 12.956 32.273 c -0.512 0 -1.023 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 11.032 -11.033 c 0.78 -0.781 2.047 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 L 14.37 31.688 C 13.979 32.078 13.467 32.273 12.956 32.273 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 12.956 44 c -0.512 0 -1.024 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 23.107 -23.107 c 0.78 -0.781 2.048 -0.781 2.828 0 c 0.781 0.781 0.781 2.047 0 2.828 L 14.37 43.415 C 13.979 43.805 13.467 44 12.956 44 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 46.663 65.561 h -3.326 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 3.326 c 1.104 0 2 0.896 2 2 S 47.768 65.561 46.663 65.561 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
	        <path d="M 66.063 83.715 H 23.937 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 42.125 c 1.104 0 2 0.896 2 2 S 67.167 83.715 66.063 83.715 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
            </g>
        </svg>
    )
}
const MobileAppIcon = ({fill,w,h}:iconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        version="1.1" 
        width={w} 
        height={h} 
        viewBox="0 0 256 256" 
        xmlSpace="preserve">
        <g style={{ stroke: "none", strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
        <path d="M 64.533 0 H 25.467 c -3.829 0 -6.944 3.115 -6.944 6.944 v 76.112 c 0 3.829 3.115 6.944 6.944 6.944 h 39.065 c 3.829 0 6.944 -3.115 6.944 -6.944 V 6.944 C 71.477 3.115 68.362 0 64.533 0 z M 39.593 7.097 h 10.814 c 1.081 0 1.957 0.876 1.957 1.957 c 0 1.08 -0.876 1.956 -1.957 1.956 H 39.593 c -1.081 0 -1.957 -0.876 -1.957 -1.956 C 37.636 7.973 38.512 7.097 39.593 7.097 z M 45 83.684 c -1.891 0 -3.424 -1.533 -3.424 -3.424 c 0 -1.891 1.533 -3.424 3.424 -3.424 s 3.424 1.533 3.424 3.424 C 48.424 82.151 46.891 83.684 45 83.684 z M 67.564 70.52 H 22.436 V 18.017 h 45.128 V 70.52 z" 
        style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: fill || "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} 
        transform=" matrix(1 0 0 1 0 0) " 
        strokeLinecap="round"/>
        </g>
</svg>
    )
}

const ArrowDown = ({fill,w,h}:iconProps) => {
    return (
        <svg 
            width={w} 
            height={h} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill={fill}></path>
            </g>
        </svg>
    )
}
export {WebAppIcon, WWWIcon,MobileAppIcon,ArrowDown};