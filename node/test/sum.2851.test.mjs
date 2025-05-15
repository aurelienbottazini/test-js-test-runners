
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 2 to equal 46', (t) => {
  assert.strictEqual(sum(44, 2), 46);
});
