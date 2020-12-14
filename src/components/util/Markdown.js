import React from 'react'
import remark from 'remark'
import remarkHtml from "remark-html"
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import Paragraph from '../atoms/Paragraph'
 
 
const Markdown = ({children}) => {
    const content = remark()
        .use(remarkHtml)
        .use(remark2rehype)
        .use(rehype2react, {createElement: React.createElement, components: {p: ({children}) => <Paragraph>{children}</Paragraph>}})
        .processSync(children);

    return (
        <>
          {content.result}
        </>
    )
}

export default Markdown