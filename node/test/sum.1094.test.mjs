
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 20 to equal 39', (t) => {
  assert.strictEqual(sum(19, 20), 39);
});
