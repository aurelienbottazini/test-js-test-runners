
import sum3649 from '../sum3649.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 33 to equal 79 + offset 0.10520854270086644', (t) => {
  assert.strictEqual(sum3649(46, 33), 79 + 0.10520854270086644);
});
