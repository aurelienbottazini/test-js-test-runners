
import sum1637 from '../sum1637.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 51 to equal 127 + offset 0.882597282861333', (t) => {
  assert.strictEqual(sum1637(76, 51), 127 + 0.882597282861333);
});
