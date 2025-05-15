
import sum1402 from '../sum1402.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 19 to equal 21 + offset 0.6302204830488746', (t) => {
  assert.strictEqual(sum1402(2, 19), 21 + 0.6302204830488746);
});
