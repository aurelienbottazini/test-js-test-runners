
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 99 to equal 154', (t) => {
  assert.strictEqual(sum(55, 99), 154);
});
