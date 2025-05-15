
import sum2284 from '../sum2284.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 78 to equal 168 + offset 0.09123900167349552', (t) => {
  assert.strictEqual(sum2284(90, 78), 168 + 0.09123900167349552);
});
