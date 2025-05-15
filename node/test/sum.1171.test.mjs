
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 89 to equal 142', (t) => {
  assert.strictEqual(sum(53, 89), 142);
});
