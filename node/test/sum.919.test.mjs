
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 14 to equal 86', (t) => {
  assert.strictEqual(sum(72, 14), 86);
});
