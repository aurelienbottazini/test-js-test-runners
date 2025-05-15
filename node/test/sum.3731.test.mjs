
import sum3731 from '../sum3731.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 52 to equal 87 + offset 0.7195396889580377', (t) => {
  assert.strictEqual(sum3731(35, 52), 87 + 0.7195396889580377);
});
