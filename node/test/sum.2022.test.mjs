
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 60 to equal 150', (t) => {
  assert.strictEqual(sum(90, 60), 150);
});
