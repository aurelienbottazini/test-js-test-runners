
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 66 to equal 145', (t) => {
  assert.strictEqual(sum(79, 66), 145);
});
