
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 3 to equal 4', (t) => {
  assert.strictEqual(sum(1, 3), 4);
});
