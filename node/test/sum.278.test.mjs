
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 65 to equal 133', (t) => {
  assert.strictEqual(sum(68, 65), 133);
});
