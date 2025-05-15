
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 12 to equal 96', (t) => {
  assert.strictEqual(sum(84, 12), 96);
});
