
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 43 to equal 61', (t) => {
  assert.strictEqual(sum(18, 43), 61);
});
