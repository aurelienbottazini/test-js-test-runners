
import sum3608 from '../sum3608.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 28 to equal 86 + offset 0.42544277880987647', (t) => {
  assert.strictEqual(sum3608(58, 28), 86 + 0.42544277880987647);
});
