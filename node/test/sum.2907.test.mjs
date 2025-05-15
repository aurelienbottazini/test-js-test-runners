
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 90 to equal 160', (t) => {
  assert.strictEqual(sum(70, 90), 160);
});
