
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 56 to equal 132', (t) => {
  assert.strictEqual(sum(76, 56), 132);
});
