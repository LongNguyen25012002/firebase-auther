import { AuthContextProvider } from "../Firebase/firebaseContext";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "../router/routerConfig";
const App = ({children}) => {
    return (
        <AuthContextProvider>
            <RouterProvider router={routerConfig}>
                <div className="app">{children}</div>
            </RouterProvider>
        </AuthContextProvider>
    );
};

export default App;
