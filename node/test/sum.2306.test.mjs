
import sum2306 from '../sum2306.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 17 to equal 49 + offset 0.30695536015714964', (t) => {
  assert.strictEqual(sum2306(32, 17), 49 + 0.30695536015714964);
});
