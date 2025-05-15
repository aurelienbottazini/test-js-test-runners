
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 32 to equal 32', (t) => {
  assert.strictEqual(sum(0, 32), 32);
});
