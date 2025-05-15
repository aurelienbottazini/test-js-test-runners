
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 26 to equal 102', (t) => {
  assert.strictEqual(sum(76, 26), 102);
});
