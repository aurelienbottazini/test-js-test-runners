
import sum2573 from '../sum2573.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 4 to equal 59 + offset 0.9098694842151308', (t) => {
  assert.strictEqual(sum2573(55, 4), 59 + 0.9098694842151308);
});
