
import sum1611 from '../sum1611.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 44 to equal 62 + offset 0.09727052177413731', (t) => {
  assert.strictEqual(sum1611(18, 44), 62 + 0.09727052177413731);
});
