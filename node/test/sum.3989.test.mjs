
import sum3989 from '../sum3989.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 40 to equal 127 + offset 0.0029260781049319506', (t) => {
  assert.strictEqual(sum3989(87, 40), 127 + 0.0029260781049319506);
});
