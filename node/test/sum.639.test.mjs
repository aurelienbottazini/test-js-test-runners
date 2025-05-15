
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 74 to equal 157', (t) => {
  assert.strictEqual(sum(83, 74), 157);
});
