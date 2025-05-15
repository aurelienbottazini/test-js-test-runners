
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 65 to equal 96', (t) => {
  assert.strictEqual(sum(31, 65), 96);
});
