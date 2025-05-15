
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 65 to equal 161', (t) => {
  assert.strictEqual(sum(96, 65), 161);
});
