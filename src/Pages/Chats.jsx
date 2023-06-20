import ChatsHeader from "../Components/Chats/ChatsHeader";
import ChatsBox from "../Components/Chats/ChatsBox";

const Chats = () => {
  return (
    <div className="page-container">
      <ChatsHeader />
      <main>
        <ChatsBox />
      </main>
    </div>
  );
};

export default Chats;
