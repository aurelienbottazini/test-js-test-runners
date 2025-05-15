
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 93 to equal 127', (t) => {
  assert.strictEqual(sum(34, 93), 127);
});
