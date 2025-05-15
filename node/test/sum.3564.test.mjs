
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 19 to equal 105', (t) => {
  assert.strictEqual(sum(86, 19), 105);
});
