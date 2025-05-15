
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 75 to equal 76', (t) => {
  assert.strictEqual(sum(1, 75), 76);
});
