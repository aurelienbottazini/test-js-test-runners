
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 16 to equal 49', (t) => {
  assert.strictEqual(sum(33, 16), 49);
});
