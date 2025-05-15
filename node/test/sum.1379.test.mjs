
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 93 to equal 173', (t) => {
  assert.strictEqual(sum(80, 93), 173);
});
