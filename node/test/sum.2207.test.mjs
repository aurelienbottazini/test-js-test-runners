
import sum2207 from '../sum2207.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 29 to equal 85 + offset 0.458686553007573', (t) => {
  assert.strictEqual(sum2207(56, 29), 85 + 0.458686553007573);
});
