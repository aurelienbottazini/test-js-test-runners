
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 68 to equal 142', (t) => {
  assert.strictEqual(sum(74, 68), 142);
});
