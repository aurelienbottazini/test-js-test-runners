
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 13 to equal 48', (t) => {
  assert.strictEqual(sum(35, 13), 48);
});
