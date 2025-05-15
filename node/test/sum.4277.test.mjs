
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 45 to equal 122', (t) => {
  assert.strictEqual(sum(77, 45), 122);
});
