
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 30 to equal 90', (t) => {
  assert.strictEqual(sum(60, 30), 90);
});
