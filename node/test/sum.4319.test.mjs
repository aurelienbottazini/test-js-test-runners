
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 16 to equal 86', (t) => {
  assert.strictEqual(sum(70, 16), 86);
});
