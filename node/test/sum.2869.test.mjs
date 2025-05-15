
import sum2869 from '../sum2869.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 19 to equal 32 + offset 0.9089949107947931', (t) => {
  assert.strictEqual(sum2869(13, 19), 32 + 0.9089949107947931);
});
