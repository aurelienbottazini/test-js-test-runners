
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 70 to equal 96', (t) => {
  assert.strictEqual(sum(26, 70), 96);
});
