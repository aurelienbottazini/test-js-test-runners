
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 19 to equal 64', (t) => {
  assert.strictEqual(sum(45, 19), 64);
});
