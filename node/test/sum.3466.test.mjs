
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 46 to equal 137', (t) => {
  assert.strictEqual(sum(91, 46), 137);
});
