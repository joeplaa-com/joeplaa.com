import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Code from './src/components/code'
import configureStore from './src/store/configureStore'
import "./src/styles/site.scss"
import "katex/dist/katex.min.css"

const components = {
    // eslint-disable-next-line react/display-name
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'lightgray', borderRadius: '3px', marginLeft: '-4px', marginRight: '-2px', paddingLeft: '4px', paddingRight: '4px' }} {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className && props.className.replace('language-', '')
                    }
                    {...props}
                />
            );
        }
    }
};

export const wrapRootElement = ({ element }) => (
    <Provider store={configureStore().store}>
        <PersistGate persistor={configureStore().persistor} loading={null}>
            <MDXProvider components={components}>
                {element}
            </MDXProvider>
        </PersistGate>
    </Provider>
);