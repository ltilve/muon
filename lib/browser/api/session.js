const {EventEmitter} = require('events')
const {app} = require('electron')
const {fromPartition, getAllSessions, Session} = process.atomBinding('session')

// Public API.
Object.defineProperties(exports, {
  defaultSession: {
    enumerable: true,
    get () { return fromPartition('') }
  },
  fromPartition: {
    enumerable: true,
    value: fromPartition
  },
  getAllSessions: {
    enumerable: true,
    value: getAllSessions
  }
})

Object.setPrototypeOf(Session.prototype, EventEmitter.prototype)

Session.prototype._init = function () {
  app.emit('session-created', this)
}
