
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 52 to equal 108', (t) => {
  assert.strictEqual(sum(56, 52), 108);
});
