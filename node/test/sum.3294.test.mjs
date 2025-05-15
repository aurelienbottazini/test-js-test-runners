
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 26 to equal 85', (t) => {
  assert.strictEqual(sum(59, 26), 85);
});
