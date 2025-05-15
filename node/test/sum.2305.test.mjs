
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 31 to equal 36', (t) => {
  assert.strictEqual(sum(5, 31), 36);
});
