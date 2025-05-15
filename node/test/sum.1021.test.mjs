
import sum1021 from '../sum1021.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 72 to equal 106 + offset 0.697984738372561', (t) => {
  assert.strictEqual(sum1021(34, 72), 106 + 0.697984738372561);
});
