import React from 'react';

export const Button = props => {
    return (
        <div
            style={{
                width: 100,
                height: 50,
                backgroundColor: 'darkblue',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: props.top,
                left: props.left,
            }}
        >
            {props.title}
        </div>
    );
};
