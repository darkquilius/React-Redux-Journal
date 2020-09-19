import React, {createClass} from "react";


const Comments = createClass({
    renderComment(comment, i){
        return(
        <div className="comment" key={i}>
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
            </p>
        </div>
        )
    },

    handleSubmit(e){
        e.preventDefault();
        const {postId} = this.props.params;
        const comment = this.refs.comment.value;
        const author = this.refs.author.value;
        this.props.addComment(postId, comment, author);
        this.refs.commentForm.reset();
    },

    render(){
        return(
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="text" ref="author" placeholder="author" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
})

export default Comments