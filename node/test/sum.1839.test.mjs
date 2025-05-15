
import sum1839 from '../sum1839.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 88 to equal 147 + offset 0.014601882734222138', (t) => {
  assert.strictEqual(sum1839(59, 88), 147 + 0.014601882734222138);
});
