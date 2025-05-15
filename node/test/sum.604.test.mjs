
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 28 to equal 54', (t) => {
  assert.strictEqual(sum(26, 28), 54);
});
