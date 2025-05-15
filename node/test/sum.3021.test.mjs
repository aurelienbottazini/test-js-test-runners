
import sum3021 from '../sum3021.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 34 to equal 81 + offset 0.6313435444120052', (t) => {
  assert.strictEqual(sum3021(47, 34), 81 + 0.6313435444120052);
});
