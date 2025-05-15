
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 63 to equal 159', (t) => {
  assert.strictEqual(sum(96, 63), 159);
});
