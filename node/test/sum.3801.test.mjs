
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 11 to equal 53', (t) => {
  assert.strictEqual(sum(42, 11), 53);
});
