import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import  CommentList  from './DisplayCommentsComponent';

test('renders ', () => {
    const list = [{
        'id': 1,
        'name': 'UnitTestUser1',
        'message': 'This is FirstComment By User1',
        'created': '1976-04-19T12:59-0500'
    },
    {
        'id': 2,
        'name': 'UnitTestUser2',
        'message': 'This is FirstComment By User2',
        'created': '1976-04-19T12:59-0500'
    },
    ];
    render(<div><CommentList list = {list}/></div>);
    const commentsMessage = screen.getByText(/This is FirstComment By User2/i);
    expect(commentsMessage).toBeInTheDocument();    
})
