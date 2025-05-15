
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 59 to equal 154', (t) => {
  assert.strictEqual(sum(95, 59), 154);
});
