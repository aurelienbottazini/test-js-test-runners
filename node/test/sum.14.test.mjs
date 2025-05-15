
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 20 to equal 58', (t) => {
  assert.strictEqual(sum(38, 20), 58);
});
