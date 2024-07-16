import arrow from '../assets/arrow.svg';

const Type = ({ type, changeType }) => {

    return (
        <div className="flex items-center justify-center">
            <div className="w-6 m-6">
                <button onClick={() => changeType(-1)}>
                    <svg className='w-full transform scale-x-[-1] text-[#212529] fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 60">
                        <path
                            fill="currentColor"
                            stroke="none"
                            d="M 56,68 V 56 H 44 V 68 H 56 M 32,68 V 80 H 44 V 68 H 32 M 44,44 H 56 V 32 H 44 v 12 m 24,0 H 56 V 56 H 68 V 44 M 44,32 V 20 H 32 v 12 z"
                            transform="translate(-32,-20)"
                        />
                    </svg>
                </button>
            </div>
            <div className="nes-container is-dark text-center w-3/4">
                <p>{type.toUpperCase()}</p>
            </div>
            <div className="w-6 m-6">
                <button onClick={() => changeType(1)}>
                    <svg className='w-full transform text-[#212529] fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 60">
                        <path
                            fill="currentColor"
                            stroke="none"
                            d="M 56,68 V 56 H 44 V 68 H 56 M 32,68 V 80 H 44 V 68 H 32 M 44,44 H 56 V 32 H 44 v 12 m 24,0 H 56 V 56 H 68 V 44 M 44,32 V 20 H 32 v 12 z"
                            transform="translate(-32,-20)"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Type;