
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 60 to equal 98', (t) => {
  assert.strictEqual(sum(38, 60), 98);
});
