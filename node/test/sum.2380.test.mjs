
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 17 to equal 94', (t) => {
  assert.strictEqual(sum(77, 17), 94);
});
