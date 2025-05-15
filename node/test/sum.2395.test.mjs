
import sum2395 from '../sum2395.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 52 to equal 103 + offset 0.8591360894006416', (t) => {
  assert.strictEqual(sum2395(51, 52), 103 + 0.8591360894006416);
});
