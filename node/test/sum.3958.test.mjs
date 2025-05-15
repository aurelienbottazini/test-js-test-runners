
import sum3958 from '../sum3958.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 51 to equal 137 + offset 0.5825332144778994', (t) => {
  assert.strictEqual(sum3958(86, 51), 137 + 0.5825332144778994);
});
