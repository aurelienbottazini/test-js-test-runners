
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 71 to equal 76', (t) => {
  assert.strictEqual(sum(5, 71), 76);
});
