
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 93 to equal 111', (t) => {
  assert.strictEqual(sum(18, 93), 111);
});
