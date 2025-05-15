
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 35 to equal 80', (t) => {
  assert.strictEqual(sum(45, 35), 80);
});
