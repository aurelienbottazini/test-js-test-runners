
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 74 to equal 85', (t) => {
  assert.strictEqual(sum(11, 74), 85);
});
