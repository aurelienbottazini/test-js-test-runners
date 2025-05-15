
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 60 to equal 80', (t) => {
  assert.strictEqual(sum(20, 60), 80);
});
