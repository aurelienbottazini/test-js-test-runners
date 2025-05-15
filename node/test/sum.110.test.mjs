
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 20 to equal 108', (t) => {
  assert.strictEqual(sum(88, 20), 108);
});
