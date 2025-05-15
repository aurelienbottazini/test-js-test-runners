
import sum3563 from '../sum3563.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 13 to equal 80 + offset 0.43847822862583696', (t) => {
  assert.strictEqual(sum3563(67, 13), 80 + 0.43847822862583696);
});
