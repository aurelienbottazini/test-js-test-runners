
import sum1631 from '../sum1631.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 32 to equal 105 + offset 0.8599835885637896', (t) => {
  assert.strictEqual(sum1631(73, 32), 105 + 0.8599835885637896);
});
