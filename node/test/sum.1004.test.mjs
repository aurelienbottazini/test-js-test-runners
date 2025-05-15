
import sum1004 from '../sum1004.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 44 to equal 139 + offset 0.6688471046067108', (t) => {
  assert.strictEqual(sum1004(95, 44), 139 + 0.6688471046067108);
});
