
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 1 to equal 26', (t) => {
  assert.strictEqual(sum(25, 1), 26);
});
