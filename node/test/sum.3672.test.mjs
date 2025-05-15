
import sum3672 from '../sum3672.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 37 to equal 38 + offset 0.6228407344864714', (t) => {
  assert.strictEqual(sum3672(1, 37), 38 + 0.6228407344864714);
});
