
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 34 to equal 72', (t) => {
  assert.strictEqual(sum(38, 34), 72);
});
