
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 90 to equal 132', (t) => {
  assert.strictEqual(sum(42, 90), 132);
});
