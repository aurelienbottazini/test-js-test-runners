
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 36 to equal 63', (t) => {
  assert.strictEqual(sum(27, 36), 63);
});
