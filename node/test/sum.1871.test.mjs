
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 6 to equal 26', (t) => {
  assert.strictEqual(sum(20, 6), 26);
});
