
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 44 to equal 122', (t) => {
  assert.strictEqual(sum(78, 44), 122);
});
