
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 32 to equal 42', (t) => {
  assert.strictEqual(sum(10, 32), 42);
});
