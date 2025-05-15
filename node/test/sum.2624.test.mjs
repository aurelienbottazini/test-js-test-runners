
import sum2624 from '../sum2624.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 90 to equal 173 + offset 0.9897297395741962', (t) => {
  assert.strictEqual(sum2624(83, 90), 173 + 0.9897297395741962);
});
