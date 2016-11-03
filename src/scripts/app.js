import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

// var ACCESS_TOKEN = '0a47ab8866304e82a9112a1e31404b57'

// Get an Artist's Albums https://api.spotify.com/v1/artists/{id}/albums
// Search for an artist https://api.spotify.com/v1/search (use q: queryTerm, and type: artist for)

// Get an Album's Tracks https://api.spotify.com/v1/albums/{id}/tracks
// Get a single Album https://api.spotify.com/v1/albums/{id}

//Artist Collection

const app = function() {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': 'handleHome',
            'artistSearch/:searchTerm': 'handleArtistSearch',
            'albumsView': 'handleAlbumsView',
            'handleAlbumDetailView': 'handleAlbumDetails'
        }
    })
    var appRouter = new AppRouter()
}

app()