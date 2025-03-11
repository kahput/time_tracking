function Tracker() {

    const entries = [
        { id: 1, date: "2025-03-05", duration: 60 * 60 + 5000, task: "Worked on project A", project: "Project A" },
        { id: 2, date: "2025-03-04", duration: 2420, task: "Meeting with team", project: "Project B" },
        { id: 3, date: "2025-03-03", duration: 5500, task: "Developed feature X", project: "Project C" },
    ];

    const elements = entries.map((entry) => {
        return (
            <div className="flex flex-col">
                <div className="flex justify-between py-2 px-8">
                    <p>{entry.task}</p>
                    <p>{entry.duration}</p>
                </div>
            </div>
        )
    })

    return (
        <main className="">
            {/* INPUT */}
            <div className="flex gap-4 p-8 bg-gray-50 text-gray-800 shadow-lg shadow-gray-200">
                <input className="grow duration-300 focus:outline-none text-2xl" placeholder="What have you worked on?" />
                <div className="flex flex-col ">
                    <label htmlFor="type">Type:</label> <select id="type">
                        <option>Listening</option>
                        <option>Reading</option>
                        <option>Project two </option>
                        <option>Project Three</option>
                    </select>
                </div>
                <button className="uppercase py-2 px-8 bg-blue-500 text-gray-50 duration-300 ease-in-out hover:bg-blue-600">add</button>
            </div>

            {/* INPUT */}
            {elements}
        </main>
    )
}

export default Tracker;
