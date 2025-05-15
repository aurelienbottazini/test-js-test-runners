
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 43 to equal 123', (t) => {
  assert.strictEqual(sum(80, 43), 123);
});
