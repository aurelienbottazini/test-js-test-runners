
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 57 to equal 120', (t) => {
  assert.strictEqual(sum(63, 57), 120);
});
