
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 91 to equal 145', (t) => {
  assert.strictEqual(sum(54, 91), 145);
});
