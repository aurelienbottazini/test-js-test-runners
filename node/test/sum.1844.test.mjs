
import sum1844 from '../sum1844.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 87 to equal 91 + offset 0.13435981126302465', (t) => {
  assert.strictEqual(sum1844(4, 87), 91 + 0.13435981126302465);
});
