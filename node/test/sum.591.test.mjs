
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 72 to equal 92', (t) => {
  assert.strictEqual(sum(20, 72), 92);
});
