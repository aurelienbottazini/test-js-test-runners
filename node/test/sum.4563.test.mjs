
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 59 to equal 101', (t) => {
  assert.strictEqual(sum(42, 59), 101);
});
