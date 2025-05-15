
import sum2382 from '../sum2382.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 49 to equal 105 + offset 0.13100884071747476', (t) => {
  assert.strictEqual(sum2382(56, 49), 105 + 0.13100884071747476);
});
