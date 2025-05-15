
import sum1624 from '../sum1624.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 87 to equal 101 + offset 0.13227031889527852', (t) => {
  assert.strictEqual(sum1624(14, 87), 101 + 0.13227031889527852);
});
