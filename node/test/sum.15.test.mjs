
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 36 to equal 36', (t) => {
  assert.strictEqual(sum(0, 36), 36);
});
