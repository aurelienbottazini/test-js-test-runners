
import sum2857 from '../sum2857.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 67 to equal 104 + offset 0.4743997701236501', (t) => {
  assert.strictEqual(sum2857(37, 67), 104 + 0.4743997701236501);
});
