
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 52 to equal 122', (t) => {
  assert.strictEqual(sum(70, 52), 122);
});
