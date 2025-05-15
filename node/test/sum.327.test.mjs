
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 55 to equal 131', (t) => {
  assert.strictEqual(sum(76, 55), 131);
});
