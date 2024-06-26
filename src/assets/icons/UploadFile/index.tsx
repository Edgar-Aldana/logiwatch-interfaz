type UploadFileIconProps = {
    fill: string;
}
function UploadFileIcon({fill}:UploadFileIconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
  <path d="M11.3 18.95H12.8V13.925L14.85 15.975L15.9 14.925L12 11.125L8.15 14.975L9.2 16.025L11.3 13.925V18.95ZM5.5 22C5.1 22 4.75 21.85 4.45 21.55C4.15 21.25 4 20.9 4 20.5V3.5C4 3.1 4.15 2.75 4.45 2.45C4.75 2.15 5.1 2 5.5 2H14.525L20 7.475V20.5C20 20.9 19.85 21.25 19.55 21.55C19.25 21.85 18.9 22 18.5 22H5.5ZM13.775 8.15V3.5H5.5V20.5H18.5V8.15H13.775Z"/>
</svg>
    )
}

export { UploadFileIcon };