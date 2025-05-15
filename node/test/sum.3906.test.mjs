
import sum3906 from '../sum3906.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 34 to equal 102 + offset 0.5037165179801826', (t) => {
  assert.strictEqual(sum3906(68, 34), 102 + 0.5037165179801826);
});
