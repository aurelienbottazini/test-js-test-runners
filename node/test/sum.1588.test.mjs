
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 46 to equal 72', (t) => {
  assert.strictEqual(sum(26, 46), 72);
});
