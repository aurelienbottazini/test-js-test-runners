
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 52 to equal 142', (t) => {
  assert.strictEqual(sum(90, 52), 142);
});
