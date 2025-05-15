
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 54 to equal 142', (t) => {
  assert.strictEqual(sum(88, 54), 142);
});
