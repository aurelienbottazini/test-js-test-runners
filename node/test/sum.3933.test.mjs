
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 38 to equal 42', (t) => {
  assert.strictEqual(sum(4, 38), 42);
});
