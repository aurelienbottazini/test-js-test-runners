
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 65 to equal 99', (t) => {
  assert.strictEqual(sum(34, 65), 99);
});
