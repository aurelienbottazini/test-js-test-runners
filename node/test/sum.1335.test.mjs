
import sum1335 from '../sum1335.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 46 to equal 92 + offset 0.06044817692911497', (t) => {
  assert.strictEqual(sum1335(46, 46), 92 + 0.06044817692911497);
});
