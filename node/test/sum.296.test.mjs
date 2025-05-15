
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 26 to equal 98', (t) => {
  assert.strictEqual(sum(72, 26), 98);
});
