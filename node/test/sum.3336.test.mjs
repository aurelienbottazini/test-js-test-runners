
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 52 to equal 77', (t) => {
  assert.strictEqual(sum(25, 52), 77);
});
