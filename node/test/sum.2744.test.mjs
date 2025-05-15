
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 89 to equal 101', (t) => {
  assert.strictEqual(sum(12, 89), 101);
});
