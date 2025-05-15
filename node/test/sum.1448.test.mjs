
import sum1448 from '../sum1448.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 51 to equal 107 + offset 0.15306236824944952', (t) => {
  assert.strictEqual(sum1448(56, 51), 107 + 0.15306236824944952);
});
