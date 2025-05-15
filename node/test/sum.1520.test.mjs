
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 57 to equal 127', (t) => {
  assert.strictEqual(sum(70, 57), 127);
});
