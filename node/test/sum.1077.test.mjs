
import sum1077 from '../sum1077.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 30 to equal 32 + offset 0.8429948833058566', (t) => {
  assert.strictEqual(sum1077(2, 30), 32 + 0.8429948833058566);
});
