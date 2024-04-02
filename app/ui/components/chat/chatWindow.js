import chat from  "@/app/ui/styles/chat.module.css"
export default function ChatWindow({content}) {
    console.log(content,"cc")
    return(
        <div>
            {content.map((cont,ind)=>{
                return (
                    <div key={ind} className={chat.box}>
                        <div  className={chat.userdiv}>
                            <div>
                                <span className={chat.userpro}></span> 
                                <b>Mr.blue</b>
                            </div>
                            <p>{cont.user}</p>
                        </div>
                        <div  className={chat.resdiv}>
                            <div>
                                <span className={chat.userpro}></span> 
                                <b>Gemini</b>
                            </div>
                            <p>{cont.res}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}