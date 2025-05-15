
import sum1115 from '../sum1115.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 80 to equal 129 + offset 0.49017546157685454', (t) => {
  assert.strictEqual(sum1115(49, 80), 129 + 0.49017546157685454);
});
