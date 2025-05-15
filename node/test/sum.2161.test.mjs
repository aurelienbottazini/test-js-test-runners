
import sum2161 from '../sum2161.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 71 to equal 135 + offset 0.9117898914148449', (t) => {
  assert.strictEqual(sum2161(64, 71), 135 + 0.9117898914148449);
});
