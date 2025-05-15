
import sum534 from '../sum534.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 2 to equal 73 + offset 0.03857275455776088', (t) => {
  assert.strictEqual(sum534(71, 2), 73 + 0.03857275455776088);
});
