
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 53 to equal 108', (t) => {
  assert.strictEqual(sum(55, 53), 108);
});
