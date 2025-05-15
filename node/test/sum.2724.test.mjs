
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 21 to equal 31', (t) => {
  assert.strictEqual(sum(10, 21), 31);
});
