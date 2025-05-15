
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 69 to equal 108', (t) => {
  assert.strictEqual(sum(39, 69), 108);
});
