
import sum1190 from '../sum1190.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 17 to equal 20 + offset 0.5928587552776042', (t) => {
  assert.strictEqual(sum1190(3, 17), 20 + 0.5928587552776042);
});
