
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 29 to equal 81', (t) => {
  assert.strictEqual(sum(52, 29), 81);
});
