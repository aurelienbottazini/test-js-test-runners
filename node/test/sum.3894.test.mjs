
import sum3894 from '../sum3894.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 58 to equal 80 + offset 0.6360385483656955', (t) => {
  assert.strictEqual(sum3894(22, 58), 80 + 0.6360385483656955);
});
