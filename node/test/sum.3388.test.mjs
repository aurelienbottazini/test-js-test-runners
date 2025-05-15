
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 60 to equal 153', (t) => {
  assert.strictEqual(sum(93, 60), 153);
});
