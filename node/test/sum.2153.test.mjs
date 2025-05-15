
import sum2153 from '../sum2153.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 67 to equal 143 + offset 0.7907330543142231', (t) => {
  assert.strictEqual(sum2153(76, 67), 143 + 0.7907330543142231);
});
