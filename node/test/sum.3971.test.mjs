
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 27 to equal 98', (t) => {
  assert.strictEqual(sum(71, 27), 98);
});
