
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 42 to equal 83', (t) => {
  assert.strictEqual(sum(41, 42), 83);
});
