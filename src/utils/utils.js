// // Got this function on https://blog.bitsrc.io/improve-your-react-app-performance-by-using-throttling-and-debouncing-101afbe9055
// const throttle = (fn, ms) => {
//   let timeout

//   function exec() {
//       fn.apply()
//   }

//   function clear() {
//       (timeout == undefined) ? null : clearTimeout(timeout)
//   }

//   if (fn !== undefined && ms !== undefined) {
//       timeout = setTimeout(exec, ms)
//   } else {
//       console.error('callback function and the timeout must be supplied')
//   }

//   // API to clear the timeout
//   throttle.clearTimeout = function() {
//       clear();
//   }
// }

// export {
//   throttle
// }