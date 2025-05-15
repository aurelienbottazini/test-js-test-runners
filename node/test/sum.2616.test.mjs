
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 21 to equal 79', (t) => {
  assert.strictEqual(sum(58, 21), 79);
});
