
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 22 to equal 42', (t) => {
  assert.strictEqual(sum(20, 22), 42);
});
