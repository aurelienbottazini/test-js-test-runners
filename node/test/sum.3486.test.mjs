
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 1 to equal 42', (t) => {
  assert.strictEqual(sum(41, 1), 42);
});
