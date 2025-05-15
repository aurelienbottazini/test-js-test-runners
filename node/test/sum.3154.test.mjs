
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 24 to equal 71', (t) => {
  assert.strictEqual(sum(47, 24), 71);
});
