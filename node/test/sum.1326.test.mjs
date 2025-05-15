
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 49 to equal 111', (t) => {
  assert.strictEqual(sum(62, 49), 111);
});
