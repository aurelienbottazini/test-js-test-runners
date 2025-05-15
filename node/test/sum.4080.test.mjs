
import sum4080 from '../sum4080.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 27 to equal 63 + offset 0.534799285488263', (t) => {
  assert.strictEqual(sum4080(36, 27), 63 + 0.534799285488263);
});
