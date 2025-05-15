
import sum1071 from '../sum1071.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 27 to equal 31 + offset 0.7383639756359832', (t) => {
  assert.strictEqual(sum1071(4, 27), 31 + 0.7383639756359832);
});
