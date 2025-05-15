
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 68 to equal 127', (t) => {
  assert.strictEqual(sum(59, 68), 127);
});
