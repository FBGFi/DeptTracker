import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { SVGProps } from "../../constants/types";

export const SettingsIcon = (props: SVGProps) => {
    return (
        <Svg width={props.width || "100%"} height={props.height || "100%"} viewBox="0 0 42 42">
            <Path 
            d="M27.39,44.5H20.61l-.6-5,.14-.48-.49-.18a14.69,14.69,0,0,1-3.11-1.29l-.46-.25-.23.47-4,3.11L7.11,36.11l3.08-3.95.46-.23-.25-.47a14.7,14.7,0,0,1-1.29-3.11L9,27.87,8.51,28l-5-.59V20.61l5-.6.48.14.18-.49a14.71,14.71,0,0,1,1.29-3.11l.25-.46-.47-.23-3.11-4,4.81-4.79,3.95,3.08.23.47.47-.25a14.71,14.71,0,0,1,3.11-1.29L20.14,9,20,8.5l.6-5h6.79l.6,5-.13.48.48.18a14.7,14.7,0,0,1,3.11,1.29l.45.25.23-.46,4-3.11,4.79,4.81-3.08,3.95-.47.23.25.47a14.69,14.69,0,0,1,1.29,3.11l.14.48L39.5,20l5,.6v6.79l-5,.6-.48-.14-.18.49a14.67,14.67,0,0,1-1.29,3.11l-.25.45.46.23,3.11,4-4.81,4.79-3.95-3.08-.23-.46-.47.25a14.67,14.67,0,0,1-3.11,1.29l-.48.14.13.48-.59,5ZM24,13.5A10.5,10.5,0,1,0,34.5,24,10.51,10.51,0,0,0,24,13.5Z" 
            transform="translate(-3 -3)"
            fill={props.fill || "#FFFFFF"} />
            <Path 
            d="M27,4l.53,4.46-.25.87,1,.27a14.18,14.18,0,0,1,3,1.24l.91.51.41-.82L36,7.76,40.24,12l-2.77,3.51-.82.41.51.91a14.18,14.18,0,0,1,1.24,3l.27,1,.87-.25L44,21V27l-4.46.53-.87-.25-.27,1a14.18,14.18,0,0,1-1.24,3l-.51.91.82.41L40.24,36,36,40.24l-3.51-2.77-.41-.82-.91.51a14.18,14.18,0,0,1-3,1.24l-1,.27.25.87L27,44H21l-.53-4.46.25-.87-1-.27a14.18,14.18,0,0,1-3-1.24l-.91-.51-.41.82L12,40.24,7.76,36l2.77-3.51.82-.41-.51-.91a14.18,14.18,0,0,1-1.24-3l-.27-1-.87.25L4,27V21l4.46-.53.87.25.27-1a14.18,14.18,0,0,1,1.24-3l.51-.91-.82-.41L7.76,12,12,7.76l3.51,2.77.41.82.91-.51a14.18,14.18,0,0,1,3-1.24l1-.27-.25-.87L21,4H27M24,35A11,11,0,1,0,13,24,11,11,0,0,0,24,35M27.39,3H20.61a.52.52,0,0,0-.51.43l-.59,5a.48.48,0,0,0,0,.24A15.16,15.16,0,0,0,16.3,10a.47.47,0,0,0-.15-.17L12.21,6.69a.49.49,0,0,0-.28-.09.56.56,0,0,0-.39.16L6.76,11.54a.53.53,0,0,0-.07.67L9.8,16.15a.47.47,0,0,0,.17.15,15.17,15.17,0,0,0-1.33,3.22l-.15,0H8.4l-5,.59a.52.52,0,0,0-.43.51v6.78a.52.52,0,0,0,.43.51l5,.59h.09l.15,0A15.17,15.17,0,0,0,10,31.7a.47.47,0,0,0-.17.15L6.69,35.79a.53.53,0,0,0,.07.67l4.78,4.78a.57.57,0,0,0,.39.16.49.49,0,0,0,.28-.09l3.94-3.11A.47.47,0,0,0,16.3,38a15.17,15.17,0,0,0,3.22,1.33.48.48,0,0,0,0,.24l.59,5a.52.52,0,0,0,.51.43h6.78a.52.52,0,0,0,.51-.43l.59-5a.48.48,0,0,0,0-.24A15.17,15.17,0,0,0,31.7,38a.47.47,0,0,0,.15.17l3.94,3.11a.49.49,0,0,0,.28.09.57.57,0,0,0,.39-.16l4.78-4.78a.53.53,0,0,0,.07-.67L38.2,31.85A.47.47,0,0,0,38,31.7a15.17,15.17,0,0,0,1.33-3.22l.15,0h.09l5-.59a.52.52,0,0,0,.43-.51V20.61a.52.52,0,0,0-.43-.51l-5-.59h-.09l-.15,0A15.17,15.17,0,0,0,38,16.3a.47.47,0,0,0,.17-.15l3.11-3.94a.53.53,0,0,0-.07-.67L36.46,6.76a.57.57,0,0,0-.39-.16.49.49,0,0,0-.28.09L31.85,9.8a.47.47,0,0,0-.15.17,15.16,15.16,0,0,0-3.22-1.33.48.48,0,0,0,0-.24l-.59-5A.52.52,0,0,0,27.39,3ZM24,34A10,10,0,1,1,34,24,10,10,0,0,1,24,34Z" 
            transform="translate(-3 -3)"
            fill={props.fill || "#FFFFFF"} />
            <Circle cx="21" cy="21" r="6"/>
        </Svg >
    );
}