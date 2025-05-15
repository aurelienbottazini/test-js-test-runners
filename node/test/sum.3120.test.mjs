
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 56 to equal 127', (t) => {
  assert.strictEqual(sum(71, 56), 127);
});
