
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 89 to equal 100', (t) => {
  assert.strictEqual(sum(11, 89), 100);
});
