
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 5 to equal 23', (t) => {
  assert.strictEqual(sum(18, 5), 23);
});
