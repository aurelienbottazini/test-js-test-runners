
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 51 to equal 86', (t) => {
  assert.strictEqual(sum(35, 51), 86);
});
