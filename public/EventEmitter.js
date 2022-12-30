class EventEmitterClass {
  constructor() {
    this._events = {};
  }

  dispatch(eventName, data) {
    if (!eventName) return;
    if (this._events[eventName]) {
      this._events[eventName].forEach((one) => {
        if (one.times || one.times === 0) {
          if (one.times > 0) {
            one.times = one.times - 1;
            one.callback(data);
          } else {
            this.unsubscribe(eventName, null, one.id);
          }
        } else {
          one.callback(data);
        }
      });
    }
    // if (eventName !== '@all') {
    //   this.dispatch('@all', { event: eventName, data });
    // }
  }

  subscribe(eventName, callback, times) {
    if (typeof eventName === 'string') {
      if (!eventName || !callback) return;
      if (!this._events[eventName]) this._events[eventName] = [];

      const data = {
        id: Math.random().toString(36).substring(6),
        callback,
        times: times
      };

      this._events[eventName].push(data);

      return data.id;
    } else if (Array.isArray(eventName) && eventName?.length > 0) {
      if (!callback) return;

      const data = {
        id: Math.random().toString(36).substring(6),
        callback,
        times: times
      };

      eventName.forEach((oneEventName) => {
        if (!this._events[oneEventName]) this._events[oneEventName] = [];
        this._events[oneEventName].push(data);
      });

      return data.id;
    }
  }

  unsubscribe(eventName, callback, id) {
    if (!eventName || !this._events[eventName]) return;
    if (callback || id) {
      this._events[eventName] = this._events[eventName].filter((one) => !(one.id === id || one.callback?.toString() === callback?.toString()));
    } else {
      delete this._events[eventName];
    }
  }
}
const EventEmitter = new EventEmitterClass();

window.EventEmitter = EventEmitter;
// export {
//   EventEmitter,
//   EventEmitterClass,
// };
