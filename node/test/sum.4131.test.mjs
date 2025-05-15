
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 31 to equal 31', (t) => {
  assert.strictEqual(sum(0, 31), 31);
});
