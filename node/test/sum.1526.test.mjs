
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 13 to equal 45', (t) => {
  assert.strictEqual(sum(32, 13), 45);
});
