
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 8 to equal 44', (t) => {
  assert.strictEqual(sum(36, 8), 44);
});
