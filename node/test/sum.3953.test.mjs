
import sum3953 from '../sum3953.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 2 to equal 24 + offset 0.6588346460838964', (t) => {
  assert.strictEqual(sum3953(22, 2), 24 + 0.6588346460838964);
});
