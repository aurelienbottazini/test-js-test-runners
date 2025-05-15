
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 32 to equal 100', (t) => {
  assert.strictEqual(sum(68, 32), 100);
});
