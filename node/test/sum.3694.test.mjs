
import sum3694 from '../sum3694.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 12 to equal 15 + offset 0.3624021362703793', (t) => {
  assert.strictEqual(sum3694(3, 12), 15 + 0.3624021362703793);
});
