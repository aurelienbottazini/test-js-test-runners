
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 36 to equal 54', (t) => {
  assert.strictEqual(sum(18, 36), 54);
});
