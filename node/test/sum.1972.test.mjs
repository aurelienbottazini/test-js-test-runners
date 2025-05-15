
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 8 to equal 42', (t) => {
  assert.strictEqual(sum(34, 8), 42);
});
