import TaskWrapper from "../TaskWrapper";

export default function KeepingComponentsPure() {

    // 1 задача

    // это чтобы часы тикали закоментил чтобы не было ререндера каждую секунду
    // const [time, settime] = useState(new Date());
    // setInterval(() => {
    //     settime(new Date());
    // }, 1000);
    // часы не тикают, т.к. время получается 1 раз
    const time = new Date();
    let hours = time.getHours();

    const task1 = <>
        <h1 className={hours >= 0 && hours <= 17 ? "text-blue-700" : "text-fuchsia-600"}>
            {time.toLocaleTimeString()}
        </h1>
    </>

    // 2 задача

    const task2 = <>Там нет кода в некоторых импортах, по этому вставить код сюда нельзя. Задача решается удалением глобальной currentPerson переменной и передачей пропсов вложенным компонентам.</>

    // 3 задача

    const task3 = <>Такая же история, всего кода нет. Нужно создать копию массива let currentStories = stories.slice() и работать с ним.</>

    return <TaskWrapper tasks={[task1, task2, task3]} />
}
