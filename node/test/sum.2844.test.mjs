
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 26 to equal 28', (t) => {
  assert.strictEqual(sum(2, 26), 28);
});
