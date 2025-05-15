
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 34 to equal 118', (t) => {
  assert.strictEqual(sum(84, 34), 118);
});
