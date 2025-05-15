
import sum1569 from '../sum1569.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 23 to equal 92 + offset 0.9153380877147769', (t) => {
  assert.strictEqual(sum1569(69, 23), 92 + 0.9153380877147769);
});
