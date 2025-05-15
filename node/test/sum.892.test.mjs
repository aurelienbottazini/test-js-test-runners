
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 32 to equal 125', (t) => {
  assert.strictEqual(sum(93, 32), 125);
});
