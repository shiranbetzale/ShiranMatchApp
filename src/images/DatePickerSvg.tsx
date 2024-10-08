import React from "react"
import Svg, { G, Path, Rect } from 'react-native-svg';

const DatePickerSvg = (props: any) => {
    const { color = "#231F20" } = props;

    return (
        <Svg height="30px" viewBox="0 0 100 100" width="30px">
            <G>
                <Path
                    d="M20,87h60V37H20V87z M22,75h9v10h-9V75z M55,63v10H45V63H55z M45,61V51h10v10H45z M43,73H33V63h10V73z    M43,75v10H33V75H43z M45,75h10v10H45V75z M57,75h10v10H57V75z M57,73V63h10v10H57z M69,63h9v10h-9V63z M69,61V51h9v10H69z M67,61   H57V51h10V61z M57,49V39h10v10H57z M55,49H45V39h10V49z M43,49H33V39h10V49z M43,51v10H33V51H43z M31,61h-9V51h9V61z M31,63v10h-9   V63H31z M69,85V75h9v10H69z M78,49h-9V39h9V49z M31,39v10h-9V39H31z"
                    fill={color} />
                <Path
                    d="M72,22h-2v-6.5c0-1.104-0.896-2-2-2s-2,0.896-2,2V22H34v-6.5c0-1.104-0.896-2-2-2s-2,0.896-2,2V22h-2   c-4.418,0-8,3.082-8,7.5V34h60v-4.5C80,25.082,76.418,22,72,22z M31.998,31.5c-2.21,0-4-1.79-4-4c0-1.479,0.811-2.754,2.002-3.447   V27.5c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.444c1.189,0.693,1.998,1.968,1.998,3.444C35.998,29.71,34.208,31.5,31.998,31.5z    M67.998,31.5c-2.21,0-4-1.79-4-4c0-1.479,0.811-2.754,2.002-3.447V27.5c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.444   c1.189,0.693,1.998,1.968,1.998,3.444C71.998,29.71,70.208,31.5,67.998,31.5z"
                    fill={color} />
                <Rect fill={color} height="6" width="6" x="35" y="41" />
                <Rect fill={color} height="6" width="6" x="59" y="65" />
                <Rect fill={color} height="6" width="6" x="47" y="65" />
            </G>
        </Svg>
    );
}

export default DatePickerSvg;