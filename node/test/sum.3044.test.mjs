
import sum3044 from '../sum3044.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 35 to equal 42 + offset 0.4731761447943764', (t) => {
  assert.strictEqual(sum3044(7, 35), 42 + 0.4731761447943764);
});
