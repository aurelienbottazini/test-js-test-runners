
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 33 to equal 42', (t) => {
  assert.strictEqual(sum(9, 33), 42);
});
