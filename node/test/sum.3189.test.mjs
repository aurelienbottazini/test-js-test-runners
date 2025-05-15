
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 14 to equal 30', (t) => {
  assert.strictEqual(sum(16, 14), 30);
});
