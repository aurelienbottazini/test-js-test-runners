
import sum1014 from '../sum1014.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 41 to equal 90 + offset 0.18834687965848906', (t) => {
  assert.strictEqual(sum1014(49, 41), 90 + 0.18834687965848906);
});
