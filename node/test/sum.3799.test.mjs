
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 28 to equal 121', (t) => {
  assert.strictEqual(sum(93, 28), 121);
});
