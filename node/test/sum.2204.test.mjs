
import sum2204 from '../sum2204.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 43 to equal 120 + offset 0.021287405303745066', (t) => {
  assert.strictEqual(sum2204(77, 43), 120 + 0.021287405303745066);
});
