
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 98 to equal 159', (t) => {
  assert.strictEqual(sum(61, 98), 159);
});
