
import sum3865 from '../sum3865.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 64 to equal 125 + offset 0.5758049106375782', (t) => {
  assert.strictEqual(sum3865(61, 64), 125 + 0.5758049106375782);
});
