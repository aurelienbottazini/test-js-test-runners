
import sum2530 from '../sum2530.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 35 to equal 78 + offset 0.008280302563213882', (t) => {
  assert.strictEqual(sum2530(43, 35), 78 + 0.008280302563213882);
});
