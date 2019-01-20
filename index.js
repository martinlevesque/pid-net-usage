const fs = require("fs")

/*
Inter-|   Receive                                                |  Transmit
 face |bytes    packets errs drop fifo frame compressed multicast|bytes    packets errs drop fifo colls carrier compressed
    lo:   90049     813    0    0    0     0          0         0    90049     813    0    0    0     0       0          0
docker0:       0       0    0    0    0     0          0         0        0       0    0    0    0     0       0          0
enp0s3: 9763821   14061    0    0    0     0          0         0   832022    7950    0    0    0     0       0          0
*/

module.exports = function(pid, netInterface) {
  return {
    parse: function parse(pid, netInterface) {
      return new Promise((resolve, reject) => {
        const path = `/proc/${pid}/net/dev`

        fs.readFile(path, (err, data) => {
          if (err) {
            reject(err)
          } else {

          }
        })
      })
    }
  }
}
