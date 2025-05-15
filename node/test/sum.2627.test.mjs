
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 2 to equal 45', (t) => {
  assert.strictEqual(sum(43, 2), 45);
});
