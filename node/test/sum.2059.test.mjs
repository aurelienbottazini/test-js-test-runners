
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 89 to equal 112', (t) => {
  assert.strictEqual(sum(23, 89), 112);
});
