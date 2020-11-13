const addEventing = function (obj) {
    let events = {}

  obj.on = (event, func) => {
    if (events[event]) {
      events[event].push(func)
    } else {
      events[event] = [func]
    }
  }

  obj.trigger = (event, ...args) => {
    events[event].forEach(func => func(...args))
  }

  return obj
}

module.exports = addEventing
