
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 65 to equal 118', (t) => {
  assert.strictEqual(sum(53, 65), 118);
});
