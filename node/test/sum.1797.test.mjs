
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 87 to equal 173', (t) => {
  assert.strictEqual(sum(86, 87), 173);
});
