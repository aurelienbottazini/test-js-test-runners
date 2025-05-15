
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 45 to equal 76', (t) => {
  assert.strictEqual(sum(31, 45), 76);
});
