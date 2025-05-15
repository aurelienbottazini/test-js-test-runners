
import sum3883 from '../sum3883.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 98 to equal 144 + offset 0.9173843118047484', (t) => {
  assert.strictEqual(sum3883(46, 98), 144 + 0.9173843118047484);
});
