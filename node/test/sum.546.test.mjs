
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 35 to equal 124', (t) => {
  assert.strictEqual(sum(89, 35), 124);
});
