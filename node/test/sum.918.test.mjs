
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 77 to equal 94', (t) => {
  assert.strictEqual(sum(17, 77), 94);
});
