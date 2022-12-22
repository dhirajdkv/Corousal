
export default function Footer(props) {
    
    return (
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className={`inline-flex rounded-md shadow`}>
                <a
                    onClick={() => {
                        props.setCurrPlace(props.places[props.index - 1])
                        props.setIndex(props.index - 1);
                    }}
                    className={`inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:text-white ${props.isPreviousAvailable ? "" : "cursor-not-allowed pointer-events-none"}`}
                >
                    Previous
                </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
                <a
                    onClick={() => {
                        props.setCurrPlace(props.places[props.index + 1])
                        props.setIndex(props.index + 1);
                    }}
                    className={`inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50 ${props.isNextAvailable ? "" : "cursor-not-allowed pointer-events-none"}`}
                >
                    Next
                </a>
            </div>
        </div>
    )
}