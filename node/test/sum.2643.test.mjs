
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 99 to equal 173', (t) => {
  assert.strictEqual(sum(74, 99), 173);
});
