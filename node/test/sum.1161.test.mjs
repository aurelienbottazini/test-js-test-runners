
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 26 to equal 38', (t) => {
  assert.strictEqual(sum(12, 26), 38);
});
