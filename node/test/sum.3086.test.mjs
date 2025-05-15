
import sum3086 from '../sum3086.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 8 to equal 26 + offset 0.5659565534382034', (t) => {
  assert.strictEqual(sum3086(18, 8), 26 + 0.5659565534382034);
});
