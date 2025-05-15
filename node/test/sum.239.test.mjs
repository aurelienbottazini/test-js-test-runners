
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 70 to equal 145', (t) => {
  assert.strictEqual(sum(75, 70), 145);
});
