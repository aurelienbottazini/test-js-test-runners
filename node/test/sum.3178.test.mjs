
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 67 to equal 160', (t) => {
  assert.strictEqual(sum(93, 67), 160);
});
