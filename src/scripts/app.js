import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

// var ACCESS_TOKEN = '0a47ab8866304e82a9112a1e31404b57'

// Get an Artist's Albums https://api.spotify.com/v1/artists/{id}/albums
// Search for an artist  (use q: queryTerm, and type: artist for)

// Get an Album's Tracks https://api.spotify.com/v1/albums/{id}/tracks
// Get a single Album https://api.spotify.com/v1/albums/{id}

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
            'artistSearch/:searchTerm': '_handleArtistSearch',
            'albumsView': '_handleAlbumsView',
            'handleAlbumDetailView': '_handleAlbumDetails',
            '*default': '_handleDefault'
        },

        _handleHome: function() {

        },

        _handleArtistSearch: function(searchTerm) {
            var albumsCollection = new AlbumsCollection()
        },

        _handleAlbumsView: function() {

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