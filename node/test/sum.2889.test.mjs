
import sum2889 from '../sum2889.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 61 to equal 107 + offset 0.959952606581576', (t) => {
  assert.strictEqual(sum2889(46, 61), 107 + 0.959952606581576);
});
