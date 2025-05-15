
import sum2967 from '../sum2967.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 17 to equal 52 + offset 0.4785343460903817', (t) => {
  assert.strictEqual(sum2967(35, 17), 52 + 0.4785343460903817);
});
