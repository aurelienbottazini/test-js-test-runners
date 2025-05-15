
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 56 to equal 91', (t) => {
  assert.strictEqual(sum(35, 56), 91);
});
