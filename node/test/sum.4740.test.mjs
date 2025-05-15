
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 39 to equal 104', (t) => {
  assert.strictEqual(sum(65, 39), 104);
});
