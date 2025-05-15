
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 21 to equal 110', (t) => {
  assert.strictEqual(sum(89, 21), 110);
});
