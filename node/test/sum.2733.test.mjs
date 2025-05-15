
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 38 to equal 65', (t) => {
  assert.strictEqual(sum(27, 38), 65);
});
