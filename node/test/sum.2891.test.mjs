
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 20 to equal 52', (t) => {
  assert.strictEqual(sum(32, 20), 52);
});
