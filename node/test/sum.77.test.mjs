
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 52 to equal 140', (t) => {
  assert.strictEqual(sum(88, 52), 140);
});
