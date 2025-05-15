
import sum1151 from '../sum1151.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 34 to equal 86 + offset 0.862266546662462', (t) => {
  assert.strictEqual(sum1151(52, 34), 86 + 0.862266546662462);
});
