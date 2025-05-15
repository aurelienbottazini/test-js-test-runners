
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 38 to equal 112', (t) => {
  assert.strictEqual(sum(74, 38), 112);
});
