import './App.css';
import Post from "./components/Post";

function App() {
  
  const Posts = [
    {img_link:"http://dessins-animes.com/da/horton/images/horton-04.jpg",user:"Carvallok77",date:"10/25/21",content:"Hello!",},
    {img_link:"http://dessins-animes.com/da/horton/images/horton-04.jpg",user:"Carvallok77",date:"10/25/21",content:"How you doin'?",},
  ];
  const Post_Components = [];
  
  Posts.forEach((post)=>{
    Post_Components.push(
    <Post user={post.user} 
    date={post.date} 
    content={post.content}
    img_link={post.img_link}
    />
    );
  });
  return (
    <div className="App" >
    {Post_Components}
    </div>
    );
  }
  
export default App;
