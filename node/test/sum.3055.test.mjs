
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 86 to equal 144', (t) => {
  assert.strictEqual(sum(58, 86), 144);
});
