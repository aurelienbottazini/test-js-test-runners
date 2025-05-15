
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 26 to equal 73', (t) => {
  assert.strictEqual(sum(47, 26), 73);
});
