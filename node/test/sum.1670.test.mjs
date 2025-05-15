
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 59 to equal 100', (t) => {
  assert.strictEqual(sum(41, 59), 100);
});
