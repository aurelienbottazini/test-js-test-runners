
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 21 to equal 86', (t) => {
  assert.strictEqual(sum(65, 21), 86);
});
