
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 74 to equal 160', (t) => {
  assert.strictEqual(sum(86, 74), 160);
});
