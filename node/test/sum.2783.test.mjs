
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 34 to equal 127', (t) => {
  assert.strictEqual(sum(93, 34), 127);
});
