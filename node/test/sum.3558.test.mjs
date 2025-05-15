
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 72 to equal 96', (t) => {
  assert.strictEqual(sum(24, 72), 96);
});
