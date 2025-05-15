
import sum3382 from '../sum3382.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 20 to equal 74 + offset 0.43945512565850364', (t) => {
  assert.strictEqual(sum3382(54, 20), 74 + 0.43945512565850364);
});
