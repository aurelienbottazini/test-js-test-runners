
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 52 to equal 120', (t) => {
  assert.strictEqual(sum(68, 52), 120);
});
