
import sum3332 from '../sum3332.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 12 to equal 96 + offset 0.6182541147529262', (t) => {
  assert.strictEqual(sum3332(84, 12), 96 + 0.6182541147529262);
});
