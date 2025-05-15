
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 17 to equal 80', (t) => {
  assert.strictEqual(sum(63, 17), 80);
});
