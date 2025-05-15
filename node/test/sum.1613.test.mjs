
import sum1613 from '../sum1613.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 97 to equal 151 + offset 0.00537555798587086', (t) => {
  assert.strictEqual(sum1613(54, 97), 151 + 0.00537555798587086);
});
