
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 49 to equal 142', (t) => {
  assert.strictEqual(sum(93, 49), 142);
});
