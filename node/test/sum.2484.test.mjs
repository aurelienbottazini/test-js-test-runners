
import sum2484 from '../sum2484.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 32 to equal 62 + offset 0.37772041526048905', (t) => {
  assert.strictEqual(sum2484(30, 32), 62 + 0.37772041526048905);
});
