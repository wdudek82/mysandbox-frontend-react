import React from 'react';


class Post extends React.Component {
   render(){
      return (
         <div>
            <h2>
               <a href="#">{this.props.title}</a>&nbsp;
               <a href="#" title="edit">
                  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
               </a>&nbsp;
               <a href="#" title="delete">
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
               </a>
            </h2>
            <p className="lead">
               by <a href="index.php">{this.props.author}</a>
            </p>
            <p>
               <span className="glyphicon glyphicon-time"></span> Posted on {this.props.datetime}
            </p>
            <hr />
            <img className="img-responsive" src={this.props.image} alt="" />
            <hr />
            <p>{this.props.content}</p>
            <a className="btn btn-primary" href="#">
               Read More <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <hr />
         </div>
      );
   }
}

Post.propTypes = {
   title: React.PropTypes.string,
   author: React.PropTypes.string,
   datetime: React.PropTypes.string,
   mainImage: React.PropTypes.string,
   content: React.PropTypes.string
};

Post.defaultProps = {
   title: 'Blog Post Title',
   author: 'Wojciech Dudek',
   datetime: 'August 28, 2017 at 10:00 PM',
   image: 'http://placehold.it/900x300',
   content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Cupiditate, voluptates, voluptas dolore ipsam cumque quam veniam accusantium
             laudantium adipisci architecto itaque dicta aperiam maiores provident id
             incidunt autem. Magni, ratione.`
};

export default Post;
