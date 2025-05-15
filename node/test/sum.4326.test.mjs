
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 71 to equal 164', (t) => {
  assert.strictEqual(sum(93, 71), 164);
});
