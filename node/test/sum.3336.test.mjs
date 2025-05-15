
import sum3336 from '../sum3336.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 73 to equal 111 + offset 0.45770283608773366', (t) => {
  assert.strictEqual(sum3336(38, 73), 111 + 0.45770283608773366);
});
