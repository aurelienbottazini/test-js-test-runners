
import sum4695 from '../sum4695.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 96 to equal 195 + offset 0.863239270429184', (t) => {
  assert.strictEqual(sum4695(99, 96), 195 + 0.863239270429184);
});
