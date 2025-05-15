
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 40 to equal 92', (t) => {
  assert.strictEqual(sum(52, 40), 92);
});
