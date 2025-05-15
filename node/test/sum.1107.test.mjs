
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 97 to equal 171', (t) => {
  assert.strictEqual(sum(74, 97), 171);
});
