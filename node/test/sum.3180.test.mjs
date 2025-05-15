
import sum3180 from '../sum3180.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 87 to equal 181 + offset 0.8259517853050572', (t) => {
  assert.strictEqual(sum3180(94, 87), 181 + 0.8259517853050572);
});
