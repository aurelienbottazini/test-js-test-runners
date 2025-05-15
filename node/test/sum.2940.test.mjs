
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 7 to equal 48', (t) => {
  assert.strictEqual(sum(41, 7), 48);
});
