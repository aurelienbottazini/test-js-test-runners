
import sum3485 from '../sum3485.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 92 to equal 179 + offset 0.5043044933446603', (t) => {
  assert.strictEqual(sum3485(87, 92), 179 + 0.5043044933446603);
});
