
import sum3355 from '../sum3355.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 8 to equal 68 + offset 0.9381718037626664', (t) => {
  assert.strictEqual(sum3355(60, 8), 68 + 0.9381718037626664);
});
