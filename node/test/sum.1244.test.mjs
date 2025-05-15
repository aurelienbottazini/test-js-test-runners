
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 84 to equal 158', (t) => {
  assert.strictEqual(sum(74, 84), 158);
});
