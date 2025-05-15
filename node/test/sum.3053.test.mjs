
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 61 to equal 71', (t) => {
  assert.strictEqual(sum(10, 61), 71);
});
