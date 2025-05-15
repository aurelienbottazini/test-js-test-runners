
import sum2799 from '../sum2799.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 25 to equal 49 + offset 0.9792029285569095', (t) => {
  assert.strictEqual(sum2799(24, 25), 49 + 0.9792029285569095);
});
