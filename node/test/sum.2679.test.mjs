
import sum2679 from '../sum2679.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 4 to equal 9 + offset 0.12828244284858437', (t) => {
  assert.strictEqual(sum2679(5, 4), 9 + 0.12828244284858437);
});
