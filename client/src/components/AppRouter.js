import {Route} from "react-router-dom";
import {StartPage} from "../pages/start-page/container-main";
import GoPage from "../pages/GoPage/GoPage";
import {observer} from "mobx-react-lite";
import {Switch} from "react-router-dom";
import {APP_ROUTE, START_ROUTE} from "../utils/consts";

const AppRouter = observer( () => {
    return(
        <Switch>
            <Route path={START_ROUTE} component={StartPage} />
            <Route path={APP_ROUTE} component={GoPage}/>
        </Switch>
    )
})

export default AppRouter