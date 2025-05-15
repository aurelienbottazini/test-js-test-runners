
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 7 to equal 100', (t) => {
  assert.strictEqual(sum(93, 7), 100);
});
