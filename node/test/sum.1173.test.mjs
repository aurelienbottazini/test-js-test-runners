
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 56 to equal 148', (t) => {
  assert.strictEqual(sum(92, 56), 148);
});
