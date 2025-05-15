
import sum1725 from '../sum1725.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 36 to equal 84 + offset 0.5415309292560505', (t) => {
  assert.strictEqual(sum1725(48, 36), 84 + 0.5415309292560505);
});
