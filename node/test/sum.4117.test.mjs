
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 69 to equal 127', (t) => {
  assert.strictEqual(sum(58, 69), 127);
});
