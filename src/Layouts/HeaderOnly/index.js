import Header from "../DefaultLayout/Header";
import Upload from "~/pages/upload";
function HeaderOnly({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Upload></Upload>
            </div>
        </div>
     );
}

export default HeaderOnly;