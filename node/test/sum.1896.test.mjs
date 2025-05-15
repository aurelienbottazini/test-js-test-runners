
import sum1896 from '../sum1896.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 22 to equal 33 + offset 0.6896738510563937', (t) => {
  assert.strictEqual(sum1896(11, 22), 33 + 0.6896738510563937);
});
