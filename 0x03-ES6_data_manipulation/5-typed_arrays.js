export default function createInt8TypedArray(length, position, value) {

  const buffer = new DataView(new ArrayBuffer(length), 0, length);

  if (position > length - 1) {
    throw Error('Position outside range');
  }

  buffer.setInt8(position, value);

  return buffer;
}

