
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 37 to equal 106', (t) => {
  assert.strictEqual(sum(69, 37), 106);
});
