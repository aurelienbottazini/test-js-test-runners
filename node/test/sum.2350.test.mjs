
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 87 to equal 148', (t) => {
  assert.strictEqual(sum(61, 87), 148);
});
