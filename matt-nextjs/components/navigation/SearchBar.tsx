import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

import AsyncSelect from "react-select/async";
import axios from "axios";


const SearchBar: NextPage = () => {
    const [currentResult, setCurrentResult] = useState<any | null>(null);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return isMounted ? (

        <div className="pt-2">
            <AsyncSelect
                styles={{
                    control: (provided) => ({
                        ...provided,
                        display: 'flex',
                        width: "300px",
                        justifyContent: "center",
                        overflow: 'hidden',

                    })
                }}
                isClearable={true}
                placeholder="Zoek naar..."
                onChange={async (newValue: any) => {
                    if (!newValue) {
                        setSearchResults([]);
                        setCurrentResult(null);
                        return;
                    }
                    // const response =  await axios.post( process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/search`, {searchparam :newValue});
                    // const data = await response.data.data.search_result.hits.hits;

                    // setSearchResults(data);
                    // setCurrentResult(newValue._source);
                }}
                loadOptions={async (inputValue: string) => {
                    if (inputValue.length < 2) return;
                    const response = await axios.post(process.env.NEXT_PUBLIC_FRONTEND_API_URL + `/api/search`, { searchparam: inputValue });

                    const data = await response.data.data.search_result.hits.hits;
                    console.log(data)
                    return data.map((item: any) => ({
                        value: item,
                        label: (
                            <>
                                {item.title}
                                <span className="text-gray-400 text-sm ml-3">
                                    <div>{item._source.email}</div>
                                </span>
                            </>
                        ),
                    }));
                }}
            />
            <div className="py-1">
                {currentResult !== null && <div>{currentResult}</div>}
                {searchResults.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {searchResults.map((entry: any) => (
                                <div key={entry._id} className="border rounded-md shadow px-3 py-2">
                                    <div className="text-lg text-bold py-2">

                                        <span className="text-sm text-gray-500 ml-3">{entry._source.name}</span>
                                    </div>
                                    <div className="text-sm text-gray-700">ℹ️ {entry._source.email}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>

    ) : '';
};


export default SearchBar;