
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 30 to equal 98', (t) => {
  assert.strictEqual(sum(68, 30), 98);
});
