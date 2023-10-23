import TaskWrapper from "../TaskWrapper";

export default function PassingPropsToAComponent() {
    // 1 задача
    function getImageUrl(imageId, size = 's') {
        return (
            'https://i.imgur.com/' +
            imageId +
            size +
            '.jpg'
        );
    }

    function Profile({ name, img, profession, awards, discovered }) {
        return (
            <section className="profile">
                <h2>{name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(img[0])}
                    alt={name}
                    width={img[1]}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        {profession}
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        ({awards})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {discovered}
                    </li>
                </ul>
            </section>
        )
    }

    const task1 = <div>
        <h1>Notable Scientists</h1>
        <Profile name="Maria Skłodowska-Curie" img={['szV5sdG', 70]} profession='physicist and chemist' awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal" discovered="polonium (chemical element)" />
        <Profile name="Katsuko Saruhashi" img={['YfeOqp2', 70]} profession='geochemist' awards="Miyake Prize for geochemistry, Tanaka Prize" discovered="a method for measuring carbon dioxide in seawater" />
    </div>

    return <TaskWrapper tasks={[task1]} />
}
