
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 20 to equal 49', (t) => {
  assert.strictEqual(sum(29, 20), 49);
});
