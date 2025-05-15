
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 5 to equal 48', (t) => {
  assert.strictEqual(sum(43, 5), 48);
});
