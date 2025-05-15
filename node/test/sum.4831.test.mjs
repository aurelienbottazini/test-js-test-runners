
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 50 to equal 122', (t) => {
  assert.strictEqual(sum(72, 50), 122);
});
