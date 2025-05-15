
import sum3033 from '../sum3033.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 28 to equal 59 + offset 0.1195709735454864', (t) => {
  assert.strictEqual(sum3033(31, 28), 59 + 0.1195709735454864);
});
