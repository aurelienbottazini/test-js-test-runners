
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 11 to equal 31', (t) => {
  assert.strictEqual(sum(20, 11), 31);
});
