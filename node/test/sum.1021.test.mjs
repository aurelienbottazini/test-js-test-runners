
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 43 to equal 79', (t) => {
  assert.strictEqual(sum(36, 43), 79);
});
