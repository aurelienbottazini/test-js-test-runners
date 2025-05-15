
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 75 to equal 100', (t) => {
  assert.strictEqual(sum(25, 75), 100);
});
