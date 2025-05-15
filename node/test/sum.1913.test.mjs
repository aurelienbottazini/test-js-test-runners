
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 53 to equal 100', (t) => {
  assert.strictEqual(sum(47, 53), 100);
});
