
import sum2193 from '../sum2193.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 70 to equal 154 + offset 0.0033172825818610363', (t) => {
  assert.strictEqual(sum2193(84, 70), 154 + 0.0033172825818610363);
});
