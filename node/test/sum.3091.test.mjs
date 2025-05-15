
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 29 to equal 92', (t) => {
  assert.strictEqual(sum(63, 29), 92);
});
