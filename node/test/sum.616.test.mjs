
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 2 to equal 54', (t) => {
  assert.strictEqual(sum(52, 2), 54);
});
