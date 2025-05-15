
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 36 to equal 91', (t) => {
  assert.strictEqual(sum(55, 36), 91);
});
