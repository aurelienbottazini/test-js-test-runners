
import sum586 from '../sum586.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 21 to equal 38 + offset 0.26018778628721617', (t) => {
  assert.strictEqual(sum586(17, 21), 38 + 0.26018778628721617);
});
