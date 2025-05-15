
import sum2267 from '../sum2267.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 5 to equal 68 + offset 0.20990498061564267', (t) => {
  assert.strictEqual(sum2267(63, 5), 68 + 0.20990498061564267);
});
