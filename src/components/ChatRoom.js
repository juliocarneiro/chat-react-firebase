import React, { Component } from 'react'
import * as firebase from 'firebase';

class ChatRoom extends Component {

    constructor(props, context){
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount(){
        firebase.database().ref('messages/').on('value', (snapshot) => {
            
            const currentMessages = snapshot.val()

            if (currentMessages != null){
                this.setState({
                    messages: currentMessages
                })
            }
        })
    }

    updateMessage(event){
        this.setState({
            message: event.target.value
        })
    }
    submitMessage(event){
        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }

        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    }

    render(){
        const currentMessage = this.state.messages.map((message, i) => {
            return(
                <li className="list-group-item" key={message.id}><i className="fa fa-user" aria-hidden="true"></i> <i className="fa fa-angle-double-right" aria-hidden="true"></i> {message.text}</li>
            )
        })
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 " id="msg">
                            <ul className="list-group">
                                {currentMessage}
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="input-group">
                                <input onChange={this.updateMessage} type="text" className="form-control" placeholder="Digite alguma coisa..." />
                                <span className="input-group-btn">
                                    <button onClick={this.submitMessage} className="btn btn-default" type="button">Enviar! <i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoom