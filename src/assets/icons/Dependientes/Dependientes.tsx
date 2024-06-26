type DependientesIconProps = {
    fill: string;
}
export default function Dependientes({fill}:DependientesIconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill={fill}>
            <path d="M22 5V3H20V5H18V7H20V9H22V7H24V5H22Z"/>
            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"/>
            <path d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"/>
            <path d="M12.51 0.0499992C13.43 1.11 14 2.49 14 4C14 5.51 13.43 6.89 12.51 7.95C14.47 7.7 16 6.04 16 4C16 1.96 14.47 0.299999 12.51 0.0499992Z"/>
            <path d="M16.53 9.83C17.42 10.66 18 11.7 18 13V16H20V13C20 11.55 18.41 10.49 16.53 9.83Z"/>
        </svg>
    )
}