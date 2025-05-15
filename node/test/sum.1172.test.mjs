
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 8 to equal 86', (t) => {
  assert.strictEqual(sum(78, 8), 86);
});
