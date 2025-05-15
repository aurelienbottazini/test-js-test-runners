
import sum1981 from '../sum1981.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 35 to equal 65 + offset 0.11738563037900596', (t) => {
  assert.strictEqual(sum1981(30, 35), 65 + 0.11738563037900596);
});
