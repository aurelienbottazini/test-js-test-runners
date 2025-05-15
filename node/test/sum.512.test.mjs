
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 25 to equal 72', (t) => {
  assert.strictEqual(sum(47, 25), 72);
});
