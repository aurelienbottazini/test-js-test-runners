
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 77 to equal 159', (t) => {
  assert.strictEqual(sum(82, 77), 159);
});
