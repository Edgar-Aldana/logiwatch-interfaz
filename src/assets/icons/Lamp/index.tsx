type LampIconProps = {
    fill: string;
}
function Lamp({fill}:LampIconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill={fill}>
            <path d="M7.53366 10.6665L4.66699 7.8665L6.53366 5.93317L9.40033 8.79984L7.53366 10.6665ZM14.667 6.6665V2.6665H17.3337V6.6665H14.667ZM24.5337 10.6665L22.6003 8.79984L25.467 5.99984L27.3337 7.8665L24.5337 10.6665ZM12.0003 29.3332V22.6665L8.00033 18.6665V11.9998H24.0003V18.6665L20.0003 22.6665V29.3332H12.0003ZM14.667 26.6665H17.3337V21.5665L21.3337 17.5665V14.6665H10.667V17.5665L14.667 21.5665V26.6665Z"/>
        </svg>
    )
}

export { Lamp };