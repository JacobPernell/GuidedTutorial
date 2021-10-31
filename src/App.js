import React from 'react';
import { Button } from './components/Button';
import { Popconfirm, Progress } from 'antd';
import 'antd/dist/antd.css';

export const App = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <h1>Hello!!</h1>
            <Button top={350} left={400} title='button 2' id='btn2' />
            <Button top={550} left={750} title='button 3' id='btn3' />
            <Popconfirm
                title='Testing'
                // onConfirm={confirm}
                // onCancel={cancel}
                okText='Yes'
                cancelText='No'
            >
                <Progress percent={30} steps={5} />
                <a href='#'>
                    <Button top={150} left={100} title='testing button' id='btn1' />
                </a>
            </Popconfirm>
        </div>
    );
};
