
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 5 to equal 96', (t) => {
  assert.strictEqual(sum(91, 5), 96);
});
