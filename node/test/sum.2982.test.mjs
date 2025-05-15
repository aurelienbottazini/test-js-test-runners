
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 93 to equal 96', (t) => {
  assert.strictEqual(sum(3, 93), 96);
});
