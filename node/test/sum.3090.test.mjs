
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 48 to equal 118', (t) => {
  assert.strictEqual(sum(70, 48), 118);
});
