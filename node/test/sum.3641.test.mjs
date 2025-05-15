
import sum3641 from '../sum3641.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 47 to equal 90 + offset 0.837529272667078', (t) => {
  assert.strictEqual(sum3641(43, 47), 90 + 0.837529272667078);
});
