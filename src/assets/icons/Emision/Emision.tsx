type EmisionIconProps = { fill: string; }
export default function Emision({fill}:EmisionIconProps) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 24 24" fill={fill}>
            <path d="M5.625 22C4.89583 22 4.27604 21.7448 3.76562 21.2344C3.25521 20.724 3 20.1042 3 19.375V16H6V2H21V19.375C21 20.1042 20.7448 20.724 20.2344 21.2344C19.724 21.7448 19.1042 22 18.375 22H5.625ZM18.3728 20.5C18.6909 20.5 18.9583 20.3922 19.175 20.1765C19.3917 19.9609 19.5 19.6938 19.5 19.375V3.5H7.5V16H17.25V19.375C17.25 19.6938 17.3576 19.9609 17.5728 20.1765C17.788 20.3922 18.0547 20.5 18.3728 20.5ZM9 8V6.5H18V8H9ZM9 11V9.5H18V11H9ZM5.6 20.5H15.75V17.5H4.5V19.375C4.5 19.6938 4.60833 19.9609 4.825 20.1765C5.04167 20.3922 5.3 20.5 5.6 20.5ZM5.6 20.5H4.5H15.75H5.6Z" />
        </svg>
    )
}
