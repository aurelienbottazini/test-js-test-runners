
import sum4371 from '../sum4371.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 45 to equal 57 + offset 0.7252041014368559', (t) => {
  assert.strictEqual(sum4371(12, 45), 57 + 0.7252041014368559);
});
