
import sum3949 from '../sum3949.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 63 to equal 109 + offset 0.9741645020696139', (t) => {
  assert.strictEqual(sum3949(46, 63), 109 + 0.9741645020696139);
});
