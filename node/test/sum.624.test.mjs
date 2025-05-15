
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 86 to equal 133', (t) => {
  assert.strictEqual(sum(47, 86), 133);
});
