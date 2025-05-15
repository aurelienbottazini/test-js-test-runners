
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 38 to equal 49', (t) => {
  assert.strictEqual(sum(11, 38), 49);
});
