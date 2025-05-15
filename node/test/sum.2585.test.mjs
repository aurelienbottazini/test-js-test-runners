
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 97 to equal 190', (t) => {
  assert.strictEqual(sum(93, 97), 190);
});
