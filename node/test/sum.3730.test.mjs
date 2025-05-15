
import sum3730 from '../sum3730.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 92 to equal 93 + offset 0.5201956528390073', (t) => {
  assert.strictEqual(sum3730(1, 92), 93 + 0.5201956528390073);
});
