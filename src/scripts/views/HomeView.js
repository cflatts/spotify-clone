import React from 'react'
import ReactDOM from 'react-dom'

const HomeView = React.createClass({
    render: function() {
        return(
            <div className ='homeView'>
                <input placeholder = 'Who are you listening to?'/>
            </div>
        )
    }
})

export default HomeView