
import sum2107 from '../sum2107.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 6 to equal 35 + offset 0.14101070146533579', (t) => {
  assert.strictEqual(sum2107(29, 6), 35 + 0.14101070146533579);
});
