import './ChatItem.scss'

export default props => 
    <div className="ChatItem">
        <p className="TopDialogue">
            <span className="Title">
                { props.title }
            </span>
            <span className="Time">
                { props.time }
            </span>
        </p>
        <p className="BottomDialogue">
            <span className="LastUser">{ props.lastUser }: </span>
            <span className="LastMessage">{ props.lastMessage }</span>
        </p>
    </div>
