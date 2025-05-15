
import sum2974 from '../sum2974.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 56 to equal 104 + offset 0.20091543792509592', (t) => {
  assert.strictEqual(sum2974(48, 56), 104 + 0.20091543792509592);
});
