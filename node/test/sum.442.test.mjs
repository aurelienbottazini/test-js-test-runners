
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 61 to equal 148', (t) => {
  assert.strictEqual(sum(87, 61), 148);
});
