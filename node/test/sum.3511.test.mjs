
import sum3511 from '../sum3511.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 35 to equal 75 + offset 0.551813566748073', (t) => {
  assert.strictEqual(sum3511(40, 35), 75 + 0.551813566748073);
});
