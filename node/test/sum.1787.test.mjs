
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 21 to equal 111', (t) => {
  assert.strictEqual(sum(90, 21), 111);
});
