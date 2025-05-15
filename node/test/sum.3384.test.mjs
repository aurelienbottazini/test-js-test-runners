
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 89 to equal 136', (t) => {
  assert.strictEqual(sum(47, 89), 136);
});
