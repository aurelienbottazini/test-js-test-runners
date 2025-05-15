
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 43 to equal 138', (t) => {
  assert.strictEqual(sum(95, 43), 138);
});
