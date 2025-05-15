
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 76 to equal 111', (t) => {
  assert.strictEqual(sum(35, 76), 111);
});
