
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 97 to equal 111', (t) => {
  assert.strictEqual(sum(14, 97), 111);
});
