
import sum1330 from '../sum1330.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 49 to equal 137 + offset 0.01256818897191625', (t) => {
  assert.strictEqual(sum1330(88, 49), 137 + 0.01256818897191625);
});
