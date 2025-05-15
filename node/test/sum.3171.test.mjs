
import sum3171 from '../sum3171.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 99 to equal 174 + offset 0.41718081686591435', (t) => {
  assert.strictEqual(sum3171(75, 99), 174 + 0.41718081686591435);
});
