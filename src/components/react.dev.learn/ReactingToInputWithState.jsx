import TaskWrapper from "../TaskWrapper";

export default function ReactingToInputWithState() {

    function f1() {
        console.log(1);
    }

    function f2() {
        console.log(2);
    }

    function f3() {
        console.log(3);
    }

    f2();
    f1();
    f3();

    return <TaskWrapper tasks={[<>None</>]} />
}
