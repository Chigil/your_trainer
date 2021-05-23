import {Route} from "react-router-dom";
import {StartPage} from "../pages/start-page/container-main";
import GoPage from "../pages/GoPage/GoPage";
import {observer} from "mobx-react-lite";
import {Switch} from "react-router-dom";

const AppRouter = observer( () => {
    return(
        <Switch>
            <Route exact path='/' component={StartPage} />
            <Route path='/go' component={GoPage}/>
        </Switch>
    )
})

export default AppRouter