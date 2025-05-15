
import sum3399 from '../sum3399.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 25 to equal 80 + offset 0.7434711983631788', (t) => {
  assert.strictEqual(sum3399(55, 25), 80 + 0.7434711983631788);
});
