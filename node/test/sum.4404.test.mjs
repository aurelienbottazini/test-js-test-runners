
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 20 to equal 113', (t) => {
  assert.strictEqual(sum(93, 20), 113);
});
