
import sum3704 from '../sum3704.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 15 to equal 44 + offset 0.7452106264039237', (t) => {
  assert.strictEqual(sum3704(29, 15), 44 + 0.7452106264039237);
});
