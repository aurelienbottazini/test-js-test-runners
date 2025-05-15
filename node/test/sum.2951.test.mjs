
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 35 to equal 108', (t) => {
  assert.strictEqual(sum(73, 35), 108);
});
