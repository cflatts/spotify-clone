import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './views/HomeView'

// var ACCESS_TOKEN = '0a47ab8866304e82a9112a1e31404b57'

// Get an Artist's Albums https://api.spotify.com/v1/artists/{id}/albums
// Search for an artist  (use q: queryTerm, and type: artist for)

// Get an Album's Tracks https://api.spotify.com/v1/albums/{id}/tracks
// Get a single Album https://api.spotify.com/v1/albums/{id}
// //beyonce id : 6vWDO969PvNqNYHIOW5v0m

//Artist Collection

var AlbumsCollection = Backbone.Collection.extend({
    url: 'https://api.spotify.com/v1/search',

    parse: function(rawData) {
        var parsedData = rawData.items
        console.log(parsedData)
    }
})

const app = function() {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': '_handleHome',
            'albumsView/:searchTerm': '_handleAlbumsView',
            'handleAlbumDetailView': '_handleAlbumDetails',
            '*default': '_handleDefault'
        },

        _handleHome: function() {
            ReactDOM.render(<HomeView />, document.querySelector('.container'))
        },

        _handleAlbumsView: function(searchTerm) {
            var albumCollection = new AlbumsCollection()

            albumCollection.fetch({
                data: {
                    q: searchTerm,
                    type: album
                }
            })
            ReactDOM.render(<AlbumsView />, document.querySelector('.container'))
        },

        _handleAlbumDetails: function() {

        },

        _handleDefault: function() {
            location.hash = 'home'
        },

        initialize: function() {
            Backbone.history.start()
        }

    })
    var appRouter = new AppRouter()
}

app()