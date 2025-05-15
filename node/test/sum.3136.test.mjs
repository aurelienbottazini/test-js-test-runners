
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 80 to equal 110', (t) => {
  assert.strictEqual(sum(30, 80), 110);
});
