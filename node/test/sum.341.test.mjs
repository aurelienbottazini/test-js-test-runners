
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 91 + 9 to equal 100', (t) => {
  assert.strictEqual(sum(91, 9), 100);
});
