
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 12 to equal 110', (t) => {
  assert.strictEqual(sum(98, 12), 110);
});
