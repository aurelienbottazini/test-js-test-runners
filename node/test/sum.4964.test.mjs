
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 43 to equal 96', (t) => {
  assert.strictEqual(sum(53, 43), 96);
});
