
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 11 to equal 40', (t) => {
  assert.strictEqual(sum(29, 11), 40);
});
