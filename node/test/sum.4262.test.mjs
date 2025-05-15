
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 91 to equal 96', (t) => {
  assert.strictEqual(sum(5, 91), 96);
});
