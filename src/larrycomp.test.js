import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import LarryComp from "./larrycomp";

test('test the larrycomp', async () => {
    // console.log('does this work');

    const myCountFunc = jest.fn();

    render(<LarryComp countFunc={myCountFunc} ></LarryComp>);
    // screen.debug();

    // const el = screen.getByText(/larrycomp/i);

    // fireEvent.click(
    //     screen.getByText('LarryComp')
    // );

    click(/Hello World /i);
    click(/from/i);
    click(/LarryComp/i);
    console.log(myCountFunc.mock.calls.length);


});

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}