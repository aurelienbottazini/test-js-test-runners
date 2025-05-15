
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 91 to equal 111', (t) => {
  assert.strictEqual(sum(20, 91), 111);
});
