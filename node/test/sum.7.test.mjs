
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 72 to equal 120', (t) => {
  assert.strictEqual(sum(48, 72), 120);
});
