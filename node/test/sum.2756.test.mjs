
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 91 to equal 112', (t) => {
  assert.strictEqual(sum(21, 91), 112);
});
