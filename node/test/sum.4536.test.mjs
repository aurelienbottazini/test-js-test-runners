
import sum4536 from '../sum4536.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 50 to equal 111 + offset 0.29031817072642985', (t) => {
  assert.strictEqual(sum4536(61, 50), 111 + 0.29031817072642985);
});
