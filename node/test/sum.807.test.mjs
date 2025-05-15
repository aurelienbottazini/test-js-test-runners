
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 66 to equal 159', (t) => {
  assert.strictEqual(sum(93, 66), 159);
});
