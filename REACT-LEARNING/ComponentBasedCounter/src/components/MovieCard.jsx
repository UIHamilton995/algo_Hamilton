// // Functional Component
// import React from 'react';

// const MovieCard = ({movie}) => {

//     return (
//          <>
//     <div className='movie-card'>
//         <div className='movie-poster'>
            
//             <img src={movie.url} alt={movie.text} />
//             <div className='movie-overlay'>
//                 Watch pre-cinema captions
//             </div>
//        </div>
//     </div>
//     <div className='movie-info'>
//         <h2>{movie.title}</h2>
//         <p>{movie.releaseDate}</p>

//     </div>
//     </>
//     )
// }

// export default MovieCard;

import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={movie.url} alt={movie.text} />
                <div className='movie-overlay'>
                    Watch pre-cinema captions
                </div>
            </div>
            <div className='movie-info'>
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard;



// // Class Component
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this); // Bind 'this'
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MyComponent;