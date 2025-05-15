
import sum371 from '../sum371.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 58 to equal 60 + offset 0.46653937061923356', (t) => {
  assert.strictEqual(sum371(2, 58), 60 + 0.46653937061923356);
});
