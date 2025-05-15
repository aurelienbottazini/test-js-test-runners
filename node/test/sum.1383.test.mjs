
import sum1383 from '../sum1383.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 87 to equal 184 + offset 0.8297256164499579', (t) => {
  assert.strictEqual(sum1383(97, 87), 184 + 0.8297256164499579);
});
