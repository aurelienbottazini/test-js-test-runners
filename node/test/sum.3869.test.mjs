
import sum3869 from '../sum3869.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 14 to equal 77 + offset 0.6354162856663154', (t) => {
  assert.strictEqual(sum3869(63, 14), 77 + 0.6354162856663154);
});
