
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 25 to equal 60', (t) => {
  assert.strictEqual(sum(35, 25), 60);
});
