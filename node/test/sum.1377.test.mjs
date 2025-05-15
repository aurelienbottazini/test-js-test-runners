
import sum1377 from '../sum1377.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 93 to equal 166 + offset 0.5910010055925053', (t) => {
  assert.strictEqual(sum1377(73, 93), 166 + 0.5910010055925053);
});
