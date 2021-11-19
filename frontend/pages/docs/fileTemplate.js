import React from 'react';
import {MDXRemote} from "next-mdx-remote";

function Trilha({info, content,children}) {
    return (
        <>
            <div>
                <h1>{info.title}</h1>
                <MDXRemote {...content}/>
            </div>
            {children}
        </>
    );
}

export default Trilha;