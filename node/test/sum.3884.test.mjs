
import sum3884 from '../sum3884.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 36 to equal 79 + offset 0.6997124554329865', (t) => {
  assert.strictEqual(sum3884(43, 36), 79 + 0.6997124554329865);
});
