
import sum1069 from '../sum1069.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 64 to equal 132 + offset 0.0858019739348953', (t) => {
  assert.strictEqual(sum1069(68, 64), 132 + 0.0858019739348953);
});
