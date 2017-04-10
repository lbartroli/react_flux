"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    //React store core functions
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    //END React store core functions
    getAllAuthors: function() {
        //Fix array is returning 1 more element, don't know why
        if (_authors[_authors.length - 1] === undefined) {
            _authors = _authors.splice(0, _authors.length - 1);
        }
        return _authors
    },
    getAuthorById: function(id) {
        return _.find(_authors, { id: id });
    }
});

Dispatcher.register(function(action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, {id: action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author) {
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
        default:
            // no op
    }
});

module.exports = AuthorStore;