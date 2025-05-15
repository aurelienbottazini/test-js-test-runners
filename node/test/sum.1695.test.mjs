
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 43 to equal 104', (t) => {
  assert.strictEqual(sum(61, 43), 104);
});
