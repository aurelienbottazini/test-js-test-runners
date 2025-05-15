
import sum3612 from '../sum3612.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 61 to equal 116 + offset 0.6961006681768865', (t) => {
  assert.strictEqual(sum3612(55, 61), 116 + 0.6961006681768865);
});
