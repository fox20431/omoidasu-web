import { useState } from "react"

export default function Root() {

    const [searchInputValue, setSearchInputValue] = useState('の')
    const [searchResultList, setSearchResultList] = useState<SearchResult[]>([])

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(e.target.value)
    }

    const search = () => {
        fetch(`${import.meta.env.VITE_API_URL}/api/dicts/jmdict/search/${searchInputValue}`)
            .then(res => {
                if (!res.ok) {
                    res.json()
                }
                return res.json()
            })
            .then(data => {
                setSearchResultList(data)
            })
            .catch(e => {
                setSearchResultList([])
                console.error(e)
            })
    }

    return (
        <>
            <header className='bg-sky-950 w-full h-12 pl-4 pr-4 pt-1'>
                <h1 className='text-2xl text-rose-300'>omoidasu</h1>
            </header>
            {/* search */}
            <div className='flex justify-center items- mt-8'>
                <div className="relative mt-2 h-8">
                    <input type="text" value={searchInputValue} onChange={handleSearchInputChange} className="px-4 py-2 w-full h-full rounded-full border-2 border-blue-600 focus:outline-none" placeholder="Search" />
                    <button className="absolute right-0 top-0 h-full px-4 text-white bg-blue-600 rounded-full hover:bg-blue-700" onClick={search}>
                        <svg className='w-4 h-4' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2530"><path className="fill-gray-100" d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="#666666" p-id="2531"></path></svg>
                    </button>
                </div>
            </div>
            {/* result */}
            <div className="flex flex-col justify-center items-center mt-8 w-full">
                {searchResultList.map((result, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-between items-center w-48 my-2 px-4 py-1 rounded-full bg-slate-200">
                            <div className="hidden">{result.sequence}</div>
                            <div className="w-24">
                                {result.kanjiList.map((kanji, index) => {
                                    let singleKanjiElement = <span key={index}>{kanji}</span>
                                    if (index > 0) {
                                        singleKanjiElement = (
                                            <>
                                                <span>/</span>
                                                <span key={index}>{kanji}</span>
                                            </>
                                        )
                                    }
                                    return (
                                        singleKanjiElement
                                    )
                                })}
                            </div>
                            <div>
                                {result.kanaList.map((kana, index) => {
                                    let singleKanaElement = <span key={index}>{kana}</span>
                                    if (index > 0) {
                                        singleKanaElement = (
                                            <>
                                                <span>/</span>
                                                <span key={index}>{kana}</span>
                                            </>
                                        )
                                    }
                                    return (
                                        singleKanaElement
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}