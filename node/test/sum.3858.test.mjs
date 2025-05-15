
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 50 to equal 127', (t) => {
  assert.strictEqual(sum(77, 50), 127);
});
