
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 6 to equal 92', (t) => {
  assert.strictEqual(sum(86, 6), 92);
});
