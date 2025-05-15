
import sum2623 from '../sum2623.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 16 to equal 115 + offset 0.9268139878635833', (t) => {
  assert.strictEqual(sum2623(99, 16), 115 + 0.9268139878635833);
});
