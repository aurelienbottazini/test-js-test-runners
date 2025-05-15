
import sum1396 from '../sum1396.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 83 to equal 131 + offset 0.43274208992019525', (t) => {
  assert.strictEqual(sum1396(48, 83), 131 + 0.43274208992019525);
});
