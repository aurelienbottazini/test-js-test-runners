
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 35 to equal 89', (t) => {
  assert.strictEqual(sum(54, 35), 89);
});
