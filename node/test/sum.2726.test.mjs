
import sum2726 from '../sum2726.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 49 to equal 144 + offset 0.7555563785148934', (t) => {
  assert.strictEqual(sum2726(95, 49), 144 + 0.7555563785148934);
});
