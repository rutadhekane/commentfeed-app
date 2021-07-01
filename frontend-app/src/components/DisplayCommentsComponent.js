import React from 'react';
import Moment from 'moment';

/*
    CommentList function returns the comments component
    Parameters:
        list: List of comments need to display

    Return:
        Rendered list of comments
*/
function CommentList({
    list
}:{list:[]}) {
    const CommentsMap = () => {
        return(
            <div>
            {list.map(items =>(
                <ul key={items.id} className="col-sm-12 col-md-12 col-lg-12 text-left border border-dark border-round rounded pt-2">
                    <li className="text-justify">{items.message}</li>
                    <li className="pt-2">
                        <p><b>{items.name} At {Moment(items.created).format('MMM DD YYYY')} </b></p>
                    </li>
                </ul>
            ))}
            </div>
        );
    };

    return(
        <CommentsMap/>
    );
}

export default CommentList;