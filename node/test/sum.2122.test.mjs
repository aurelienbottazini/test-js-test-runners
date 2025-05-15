
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 60 to equal 118', (t) => {
  assert.strictEqual(sum(58, 60), 118);
});
