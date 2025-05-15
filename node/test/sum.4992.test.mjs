
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 19 to equal 42', (t) => {
  assert.strictEqual(sum(23, 19), 42);
});
