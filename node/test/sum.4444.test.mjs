
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 48 to equal 93', (t) => {
  assert.strictEqual(sum(45, 48), 93);
});
