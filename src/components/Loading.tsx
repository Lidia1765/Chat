import React from "react";
import ReactLoading from "react-loading";

export function Loading() {
    return (
        <div>
            <ReactLoading type="bubbles" color="#000000"
                height={100} width={50} />
        </div>
    );
}