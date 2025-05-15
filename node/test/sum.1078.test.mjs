
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 52 to equal 125', (t) => {
  assert.strictEqual(sum(73, 52), 125);
});
