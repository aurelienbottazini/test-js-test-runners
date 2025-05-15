
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 7 to equal 85', (t) => {
  assert.strictEqual(sum(78, 7), 85);
});
