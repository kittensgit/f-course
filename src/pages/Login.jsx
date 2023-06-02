import React from 'react'
import { MyInput } from '../Components/UI/input/MyInput'
import { MyButton } from '../Components/UI/button/MyButton'

export const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type='text' placeholder='enter login' />
                <MyInput type='password' placeholder='enter password' />
                <MyButton> Come in </MyButton>
            </form>
        </div>
    )
}
