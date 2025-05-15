
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 53 to equal 54', (t) => {
  assert.strictEqual(sum(1, 53), 54);
});
