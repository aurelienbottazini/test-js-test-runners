
import sum2866 from '../sum2866.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 53 to equal 134 + offset 0.7346762293904727', (t) => {
  assert.strictEqual(sum2866(81, 53), 134 + 0.7346762293904727);
});
