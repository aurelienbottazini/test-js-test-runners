
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 65 to equal 120', (t) => {
  assert.strictEqual(sum(55, 65), 120);
});
