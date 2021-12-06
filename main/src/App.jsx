import ChatItem from './components/layout/ChatItem'
import './App.scss'

export default () =>
    <div className="App">
        <div className="ChatList">
            <ChatItem title="Grupo 1" time="13:31" lastMessage="Boa tarde" lastUser="Pedro" />
            <ChatItem title="Grupo 2" time="13:30" lastMessage="Do que eu estou falando é do whatsapp" lastUser="Som" />
        </div>
        <div className="ChatPanel" />
    </div>