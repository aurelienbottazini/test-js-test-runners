
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 32 to equal 86', (t) => {
  assert.strictEqual(sum(54, 32), 86);
});
