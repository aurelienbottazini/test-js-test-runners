
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 21 to equal 71', (t) => {
  assert.strictEqual(sum(50, 21), 71);
});
