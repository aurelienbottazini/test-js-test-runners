
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 50 to equal 145', (t) => {
  assert.strictEqual(sum(95, 50), 145);
});
