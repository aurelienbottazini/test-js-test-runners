
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 88 to equal 159', (t) => {
  assert.strictEqual(sum(71, 88), 159);
});
