
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 13 to equal 36', (t) => {
  assert.strictEqual(sum(23, 13), 36);
});
