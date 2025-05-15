
import sum1674 from '../sum1674.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 49 to equal 124 + offset 0.7876436074979607', (t) => {
  assert.strictEqual(sum1674(75, 49), 124 + 0.7876436074979607);
});
