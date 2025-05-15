
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 41 to equal 134', (t) => {
  assert.strictEqual(sum(93, 41), 134);
});
