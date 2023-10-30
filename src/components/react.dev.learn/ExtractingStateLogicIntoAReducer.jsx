import { useReducer, useState } from "react";
import TaskWrapper from "../TaskWrapper"



export default function ExtractingStateLogicIntoAReducer() {
    // 1 задача
    const task1 =
        `<button
onClick={() => {
dispatch({
type: 'changed_selection',
contactId: contact.id,
})
}}></button>


<textarea
value={message}
placeholder={'Chat to ' + contact.name}
onChange={(e) => {
dispatch({
type: 'edited_message',
message: e.target.value,
})
}}
/>`

    // 2 задача
    const task2 =
        `function sendMessage(){
// скобки + $
alert({contact.email}: {message});
dispatch({
type: 'edited_message',
message: '',
})
}`

    // 3 задача
    const contacts = [
        { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
        { id: 1, name: 'Alice', email: 'alice@mail.com' },
        { id: 2, name: 'Bob', email: 'bob@mail.com' },
    ];

    function Messenger() {
        const [state, dispatch] = useReducer(messengerReducer, initialState);
        const message = state.messages[state.selectedId];
        const contact = contacts.find((c) => c.id === state.selectedId);
        return (
            <div>
                <ContactList
                    contacts={contacts}
                    selectedId={state.selectedId}
                    dispatch={dispatch}
                />
                <Chat
                    key={contact.id}
                    message={message}
                    contact={contact}
                    dispatch={dispatch}
                />
            </div>
        );
    }

    const initialState = {
        selectedId: 0,
        messages: {
            0: 'Hello, Taylor', // Draft for contactId = 0
            1: 'Hello, Alice', // Draft for contactId = 1
        },
    };

    function messengerReducer(state, action) {
        switch (action.type) {
            case 'changed_selection': {
                return {
                    ...state,
                    selectedId: action.contactId,
                    // message: '',
                };
            }
            case 'edited_message': {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [state.selectedId]: action.message,
                    }
                };
            }
            case 'sent_message': {
                return {
                    ...state,
                    message: '',
                };
            }
            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }

    function ContactList({ contacts, selectedId, dispatch }) {
        return (
            <section className="contact-list">
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <button
                                className="border border-black"
                                onClick={() => {
                                    dispatch({
                                        type: 'changed_selection',
                                        contactId: contact.id,
                                    });
                                }}>
                                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }

    function Chat({ contact, message, dispatch }) {
        return (
            <section className="chat">
                <textarea
                    className="border border-black"
                    value={message}
                    placeholder={'Chat to ' + contact.name}
                    onChange={(e) => {
                        dispatch({
                            type: 'edited_message',
                            message: e.target.value,
                        });
                    }}
                />
                <br />
                <button
                    className="border border-black"
                    onClick={() => {
                        alert(`Sending "${message}" to ${contact.email}`);
                        dispatch({
                            type: 'sent_message',
                        });
                    }}>
                    Send to {contact.email}
                </button>
            </section>
        );
    }

    const task3 = <Messenger />

    // 4 задача
    const task4 = <>Опять задание в стиле "Представьте что реакт не существует"</>

    return <TaskWrapper tasks={[task1, task2, task3, task4]} />
}