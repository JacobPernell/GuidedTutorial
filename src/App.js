import React from 'react';
import { Button } from './components/Button';

export const App = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <h1>Hello!!</h1>
            <Button top={150} left={100} title='testing button' />
            <Button top={350} left={400} title='button 2' />
            <Button top={550} left={750} title='button 3' />
        </div>
    );
};
