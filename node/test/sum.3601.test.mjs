
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 8 to equal 88', (t) => {
  assert.strictEqual(sum(80, 8), 88);
});
