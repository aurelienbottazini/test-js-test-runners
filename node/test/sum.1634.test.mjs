
import sum1634 from '../sum1634.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 21 to equal 23 + offset 0.7344453988896289', (t) => {
  assert.strictEqual(sum1634(2, 21), 23 + 0.7344453988896289);
});
