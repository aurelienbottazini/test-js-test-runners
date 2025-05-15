
import sum3102 from '../sum3102.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 60 to equal 123 + offset 0.36386196510902324', (t) => {
  assert.strictEqual(sum3102(63, 60), 123 + 0.36386196510902324);
});
