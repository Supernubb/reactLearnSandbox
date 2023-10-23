import TaskWrapper from "../TaskWrapper";

export default function ReactingToInputWithState() {
    async function f() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("готово!"), 1000)
        });

        let result = await promise; // будет ждать, пока промис не выполнится (*)

        alert(result); // "готово!"

        console.log(`qdasdasdasdasadasdads`);
    }

    console.log(f());
    return <TaskWrapper tasks={[<>None</>]} />
}
