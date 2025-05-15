
import sum1689 from '../sum1689.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 94 to equal 174 + offset 0.2950960939910944', (t) => {
  assert.strictEqual(sum1689(80, 94), 174 + 0.2950960939910944);
});
