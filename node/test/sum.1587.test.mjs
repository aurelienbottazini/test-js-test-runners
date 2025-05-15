
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 25 to equal 97', (t) => {
  assert.strictEqual(sum(72, 25), 97);
});
