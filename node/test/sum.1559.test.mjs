
import sum1559 from '../sum1559.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 49 to equal 60 + offset 0.31152298161131287', (t) => {
  assert.strictEqual(sum1559(11, 49), 60 + 0.31152298161131287);
});
