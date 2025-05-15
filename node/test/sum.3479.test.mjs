
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 25 to equal 120', (t) => {
  assert.strictEqual(sum(95, 25), 120);
});
