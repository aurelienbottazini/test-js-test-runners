
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 90 to equal 111', (t) => {
  assert.strictEqual(sum(21, 90), 111);
});
