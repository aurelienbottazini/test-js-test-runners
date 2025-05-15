
import sum1381 from '../sum1381.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 68 to equal 73 + offset 0.8692588197398499', (t) => {
  assert.strictEqual(sum1381(5, 68), 73 + 0.8692588197398499);
});
