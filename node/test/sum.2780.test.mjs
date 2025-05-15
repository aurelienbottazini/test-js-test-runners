
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 66 to equal 144', (t) => {
  assert.strictEqual(sum(78, 66), 144);
});
