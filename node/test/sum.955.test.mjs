
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 32 to equal 52', (t) => {
  assert.strictEqual(sum(20, 32), 52);
});
