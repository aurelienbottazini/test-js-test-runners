
import sum3908 from '../sum3908.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 71 to equal 106 + offset 0.04405294695465489', (t) => {
  assert.strictEqual(sum3908(35, 71), 106 + 0.04405294695465489);
});
