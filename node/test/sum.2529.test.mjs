
import sum2529 from '../sum2529.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 1 to equal 47 + offset 0.059948501297887535', (t) => {
  assert.strictEqual(sum2529(46, 1), 47 + 0.059948501297887535);
});
