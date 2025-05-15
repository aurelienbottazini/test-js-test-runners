
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 98 to equal 192', (t) => {
  assert.strictEqual(sum(94, 98), 192);
});
