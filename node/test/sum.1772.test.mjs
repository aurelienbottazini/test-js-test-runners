
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 24 to equal 110', (t) => {
  assert.strictEqual(sum(86, 24), 110);
});
