const functionPack = {
  right: {
    center(prev, width, type, length, blockCount) {
      switch (type) {
        case "start":
          return (prev = (width / blockCount) * ((blockCount - 1) / 2));
        case "move":
          return (prev -= width / blockCount);
        case "end":
          return (prev = (width / blockCount) * ((blockCount - 1) / 2));
      }
    },
    start(prev, width, type, length, blockCount) {
      switch (type) {
        case "start":
          return (prev = 0);
        case "move":
          return (prev -= width);
        case "end":
          return prev - Math.ceil(width / blockCount) * (length % blockCount);
        case "goStart":
          return (prev = 0);
      }
    },
  },
  left: {
    center(prev, width, type, length, blockCount) {
      switch (type) {
        case "start":
          return (prev =
            -((width / blockCount) * (length - 1)) +
            (width / blockCount) * ((blockCount - 1) / 2));
        case "move":
          return (prev += width / blockCount);
        case "end":
          return (prev =
            -((width / blockCount) * (length - 1)) +
            (width / blockCount) * ((blockCount - 1) / 2));
      }
    },
  },
};

export default function positionMovement(args) {
  let { position, prev, width, type, length, blockCount, direction } = args;
  return functionPack[direction][position](
    prev,
    width,
    type,
    length,
    blockCount
  );
}
