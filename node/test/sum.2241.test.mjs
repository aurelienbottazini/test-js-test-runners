
import sum2241 from '../sum2241.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 70 to equal 131 + offset 0.89020321407354', (t) => {
  assert.strictEqual(sum2241(61, 70), 131 + 0.89020321407354);
});
