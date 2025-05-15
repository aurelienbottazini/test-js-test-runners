
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 14 to equal 88', (t) => {
  assert.strictEqual(sum(74, 14), 88);
});
