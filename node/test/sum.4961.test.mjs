
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 25 to equal 108', (t) => {
  assert.strictEqual(sum(83, 25), 108);
});
