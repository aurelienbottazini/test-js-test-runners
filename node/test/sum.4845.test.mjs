
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 16 to equal 104', (t) => {
  assert.strictEqual(sum(88, 16), 104);
});
