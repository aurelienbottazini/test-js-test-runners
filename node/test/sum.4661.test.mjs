
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 58 to equal 80', (t) => {
  assert.strictEqual(sum(22, 58), 80);
});
