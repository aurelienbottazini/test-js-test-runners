
import sum1710 from '../sum1710.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 60 to equal 99 + offset 0.9230882014297658', (t) => {
  assert.strictEqual(sum1710(39, 60), 99 + 0.9230882014297658);
});
