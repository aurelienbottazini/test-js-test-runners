
import sum3035 from '../sum3035.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 34 to equal 45 + offset 0.8116518906621452', (t) => {
  assert.strictEqual(sum3035(11, 34), 45 + 0.8116518906621452);
});
