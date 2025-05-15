
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 79 to equal 146', (t) => {
  assert.strictEqual(sum(67, 79), 146);
});
