
import sum1712 from '../sum1712.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 22 to equal 36 + offset 0.9579992200360485', (t) => {
  assert.strictEqual(sum1712(14, 22), 36 + 0.9579992200360485);
});
