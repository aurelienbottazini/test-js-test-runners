
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 9 to equal 21', (t) => {
  assert.strictEqual(sum(12, 9), 21);
});
