import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        xStore.setPathname(location.pathname.split('/')[1]);
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default observer(ScrollToTop);
