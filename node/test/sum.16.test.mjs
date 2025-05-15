
import sum16 from '../sum16.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 67 to equal 130 + offset 0.11902845656593342', (t) => {
  assert.strictEqual(sum16(63, 67), 130 + 0.11902845656593342);
});
