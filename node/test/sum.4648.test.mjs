
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 29 to equal 45', (t) => {
  assert.strictEqual(sum(16, 29), 45);
});
