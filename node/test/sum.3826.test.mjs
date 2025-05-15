
import sum3826 from '../sum3826.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 79 to equal 176 + offset 0.10744478241841093', (t) => {
  assert.strictEqual(sum3826(97, 79), 176 + 0.10744478241841093);
});
