
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 59 to equal 117', (t) => {
  assert.strictEqual(sum(58, 59), 117);
});
