import React from "react";
interface Props {
    isPushed: boolean;
    removeNav: boolean | undefined;
    isDark: boolean;
    togglePush: () => void;
    href: string;
}
declare const Logo: React.FC<Props>;
export default Logo;
