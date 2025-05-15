
import sum1192 from '../sum1192.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 49 to equal 107 + offset 0.9523495556030513', (t) => {
  assert.strictEqual(sum1192(58, 49), 107 + 0.9523495556030513);
});
