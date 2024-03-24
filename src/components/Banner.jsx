import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";

const Banner = ({setValue, handleSearch, value}) => {

    const clearInput = () => {
        setValue('');
    }

    return (
        <div className="h-[500px] flex justify-center items-center flex-col gap-10 my-24 relative">
            <div className="absolute inset-0 bg-[url('images/Rectangle-4287.png')] bg-cover bg-center bg-no-repeat opacity-10">

            </div>
            <Typography variant="h2">I Grow By Helping People In Need</Typography>
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="Search"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color={"blue-gray"}
                    className="!absolute right-1 top-1 rounded bg-red-500"
                    onClick={()=> {
                        handleSearch();
                        clearInput();
                    }}
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Banner;