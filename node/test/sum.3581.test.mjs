
import sum3581 from '../sum3581.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 17 to equal 44 + offset 0.6084082066581689', (t) => {
  assert.strictEqual(sum3581(27, 17), 44 + 0.6084082066581689);
});
