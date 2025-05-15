
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 94 to equal 192', (t) => {
  assert.strictEqual(sum(98, 94), 192);
});
