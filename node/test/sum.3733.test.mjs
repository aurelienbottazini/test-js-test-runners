
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 96 to equal 124', (t) => {
  assert.strictEqual(sum(28, 96), 124);
});
