
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 86 to equal 179', (t) => {
  assert.strictEqual(sum(93, 86), 179);
});
