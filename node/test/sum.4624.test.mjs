
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 43 to equal 94', (t) => {
  assert.strictEqual(sum(51, 43), 94);
});
