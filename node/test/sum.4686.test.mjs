
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 54 to equal 85', (t) => {
  assert.strictEqual(sum(31, 54), 85);
});
