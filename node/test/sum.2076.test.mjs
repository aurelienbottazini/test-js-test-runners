
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 24 to equal 85', (t) => {
  assert.strictEqual(sum(61, 24), 85);
});
