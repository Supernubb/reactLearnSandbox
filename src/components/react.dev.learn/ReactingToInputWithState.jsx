import { useState } from "react";
import TaskWrapper from "../TaskWrapper";

export default function ReactingToInputWithState() {
    // 1 задача
    const [imgActive, setImgActive] = useState(false);

    const task1 = <div onClick={() => setImgActive(false)} className={`background ${!imgActive && "background--active"}`}>
        <div className="text-orange-500 font-bold">Оно нажимается - смотреть классы в devTools</div>
        <img
            onClick={e => {
                e.stopPropagation();
                setImgActive(true);
            }}
            className={`picture ${imgActive && "picture--active"}`}
            alt="Rainbow houses in Kampung Pelangi, Indonesia"
            src="https://i.imgur.com/5qwVYb1.jpeg"
        />
    </div>

    // 2 задача
    const [isEdit, setIsEdit] = useState(false)
    const [firstName, setFirstName] = useState("Jane")
    const [lastName, setLastName] = useState("Jacobs")

    const task2 = <form className="flex flex-col">
        <label className="flex self-start">
            First name:{' '}
            {isEdit
                ? <input value={firstName} className="border border-black" onChange={e => setFirstName(e.target.value)} />
                : <b>{firstName}</b>}
        </label>
        <label className="flex self-start">
            Last name:{' '}
            {isEdit
                ? <input value={lastName} className="border border-black" onChange={e => setLastName(e.target.value)} />
                : <b>{lastName}</b>}
        </label>
        <button className="border border-black flex self-start" type="submit" onClick={e => {
            e.preventDefault();
            setIsEdit(!isEdit);
        }}>
            {isEdit ? "Save" : "Edit"} Profile
        </button>
        <p className="flex self-start"><i>Hello, {firstName} {lastName}!</i></p>
    </form>

    // 3 задача
    const task3 = <>Задача начинается с фразы "Представьте, что React не существует", а зачем собственно тогда изучать то, что не существует? Дроп этот таск в помойку.</>

    return <TaskWrapper tasks={[task1, task2, task3]} />
}
