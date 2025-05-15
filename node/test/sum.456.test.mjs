
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 10 to equal 54', (t) => {
  assert.strictEqual(sum(44, 10), 54);
});
