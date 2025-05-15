
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 67 to equal 124', (t) => {
  assert.strictEqual(sum(57, 67), 124);
});
