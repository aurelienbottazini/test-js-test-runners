
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 37 to equal 97', (t) => {
  assert.strictEqual(sum(60, 37), 97);
});
