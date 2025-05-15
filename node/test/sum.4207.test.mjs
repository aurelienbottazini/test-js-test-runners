
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 19 to equal 111', (t) => {
  assert.strictEqual(sum(92, 19), 111);
});
