
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 55 to equal 145', (t) => {
  assert.strictEqual(sum(90, 55), 145);
});
