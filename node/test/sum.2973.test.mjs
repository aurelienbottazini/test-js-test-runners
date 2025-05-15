
import sum2973 from '../sum2973.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 55 to equal 84 + offset 0.3929746911282739', (t) => {
  assert.strictEqual(sum2973(29, 55), 84 + 0.3929746911282739);
});
