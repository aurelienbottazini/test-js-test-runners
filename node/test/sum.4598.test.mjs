
import sum4598 from '../sum4598.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 31 to equal 107 + offset 0.3325788789605818', (t) => {
  assert.strictEqual(sum4598(76, 31), 107 + 0.3325788789605818);
});
