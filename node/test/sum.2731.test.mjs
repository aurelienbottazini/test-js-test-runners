
import sum2731 from '../sum2731.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 94 to equal 106 + offset 0.026143898956514477', (t) => {
  assert.strictEqual(sum2731(12, 94), 106 + 0.026143898956514477);
});
