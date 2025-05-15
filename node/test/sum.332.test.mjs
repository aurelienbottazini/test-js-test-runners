
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 9 to equal 42', (t) => {
  assert.strictEqual(sum(33, 9), 42);
});
