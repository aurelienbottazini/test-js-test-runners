
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 41 to equal 108', (t) => {
  assert.strictEqual(sum(67, 41), 108);
});
