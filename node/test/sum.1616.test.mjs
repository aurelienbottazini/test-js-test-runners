
import sum1616 from '../sum1616.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 28 to equal 86 + offset 0.1866596876068355', (t) => {
  assert.strictEqual(sum1616(58, 28), 86 + 0.1866596876068355);
});
