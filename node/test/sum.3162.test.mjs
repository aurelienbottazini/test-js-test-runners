
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 22 to equal 49', (t) => {
  assert.strictEqual(sum(27, 22), 49);
});
