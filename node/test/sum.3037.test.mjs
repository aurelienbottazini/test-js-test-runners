
import sum3037 from '../sum3037.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 7 to equal 43 + offset 0.4823520425183546', (t) => {
  assert.strictEqual(sum3037(36, 7), 43 + 0.4823520425183546);
});
