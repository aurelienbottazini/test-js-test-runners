
import sum3474 from '../sum3474.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 59 to equal 105 + offset 0.21308992379308234', (t) => {
  assert.strictEqual(sum3474(46, 59), 105 + 0.21308992379308234);
});
