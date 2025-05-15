
import sum1717 from '../sum1717.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 58 to equal 104 + offset 0.6439938863186045', (t) => {
  assert.strictEqual(sum1717(46, 58), 104 + 0.6439938863186045);
});
