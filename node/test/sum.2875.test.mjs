
import sum2875 from '../sum2875.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 71 to equal 142 + offset 0.4708387230102753', (t) => {
  assert.strictEqual(sum2875(71, 71), 142 + 0.4708387230102753);
});
