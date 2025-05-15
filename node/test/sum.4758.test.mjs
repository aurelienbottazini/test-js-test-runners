
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 13 to equal 28', (t) => {
  assert.strictEqual(sum(15, 13), 28);
});
