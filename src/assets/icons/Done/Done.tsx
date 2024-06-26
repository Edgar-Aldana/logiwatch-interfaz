type DoneIconProps = {
    fill: string;
}
export default function Done({ fill } : DoneIconProps) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill={fill}>
            <path d="M6.00002 11.2L1.80002 7.00001L0.400024 8.40001L6.00002 14L18 2.00001L16.6 0.600006L6.00002 11.2Z"/>
        </svg>
    )
}