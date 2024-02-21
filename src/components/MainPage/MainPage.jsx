import { Component } from "react"
import Avatar from '@mui/material/Avatar';
import "./MainPage.css"
import Img1 from "/src/components/images/img1.jpg";


class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state ={ }
    }

    render() {
        return(

            <div className="h-screen bg-[#d2cfdf] flex overflow-hidden">

                <div className="w-[20%] bg-white"></div>

                <div className="w-[60%] bg-sky overflow-scroll scrollbar-hide">
                   
                  <div className="bg-white h-[70px]"></div>

                  <div className="bg-white w-[60%]  mx-auto mt-[30px] p-8">
                    <div className="border-b flex items-center pb-8">
                         <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                         <div className="ml-4">
                           <h3>Lara jones</h3>
                           <p>@Lara_jones</p>
                         </div>
                    </div>

                      <div className="border b pb-4 ">
                           <img src="/src/components/images/img1.jpg"></img>
                      </div>

                      <div className="flex justify-evenly mt-5">
                        <div >  <img src="https://cdn.hugeicons.com/icons/favourite-stroke-rounded.svg" alt="favourite" width="24" height="24" />  Like</div>
                        <div className="text-justify"> <img src="https://cdn.hugeicons.com/icons/bubble-chat-delay-stroke-rounded.svg" alt="bubble-chat-delay" width="24" height="24" /> Comment</div>
                        <div> <img src="https://cdn.hugeicons.com/icons/share-01-stroke-rounded.svg" alt="share-01" width="24" height="24" /> Share</div>
                      </div>

                  </div>

                </div>

                <div className="w-[20%] bg-white"></div>
                   
            </div> 
        );
    }
}

export default MainPage