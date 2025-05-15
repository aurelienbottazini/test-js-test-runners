
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 11 to equal 108', (t) => {
  assert.strictEqual(sum(97, 11), 108);
});
