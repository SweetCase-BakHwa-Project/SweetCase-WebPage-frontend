import { useMediaQuery } from "react-responsive";

function IsPC(): boolean {
    return useMediaQuery({
        query: "(min-width: 768px)"
    });
}
function IsMobile(): boolean {
    return useMediaQuery({
        query : "(max-width:767px)"
    });
}
export {IsPC, IsMobile};