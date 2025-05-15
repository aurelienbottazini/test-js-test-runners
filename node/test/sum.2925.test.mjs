
import sum2925 from '../sum2925.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 34 to equal 97 + offset 0.3356307313139788', (t) => {
  assert.strictEqual(sum2925(63, 34), 97 + 0.3356307313139788);
});
