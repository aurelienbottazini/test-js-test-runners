
import sum1973 from '../sum1973.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 28 to equal 92 + offset 0.778176565719126', (t) => {
  assert.strictEqual(sum1973(64, 28), 92 + 0.778176565719126);
});
