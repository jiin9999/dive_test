import ChatsHeader from "../Components/Chats/ChatsHeader";
import ChatsBox from "../Components/Chats/ChatsBox";
import ChatsNav from "../Components/Chats/ChatsNav";

const Chats = () => {
  return (
    <div className="page-container">
      <ChatsHeader />
      <main>
        <ChatsBox />
      </main>
      <ChatsNav />
    </div>
  );
};

export default Chats;
