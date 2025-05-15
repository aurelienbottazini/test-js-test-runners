
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 52 to equal 54', (t) => {
  assert.strictEqual(sum(2, 52), 54);
});
