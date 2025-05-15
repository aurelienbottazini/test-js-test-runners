
import sum1062 from '../sum1062.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 32 to equal 81 + offset 0.18020105382455032', (t) => {
  assert.strictEqual(sum1062(49, 32), 81 + 0.18020105382455032);
});
