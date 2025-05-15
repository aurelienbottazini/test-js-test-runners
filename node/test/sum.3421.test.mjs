
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 33 to equal 94', (t) => {
  assert.strictEqual(sum(61, 33), 94);
});
