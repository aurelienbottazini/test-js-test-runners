
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 34 to equal 106', (t) => {
  assert.strictEqual(sum(72, 34), 106);
});
