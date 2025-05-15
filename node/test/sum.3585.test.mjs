
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 19 to equal 94', (t) => {
  assert.strictEqual(sum(75, 19), 94);
});
