
import sum1705 from '../sum1705.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 53 to equal 108 + offset 0.7104442940888994', (t) => {
  assert.strictEqual(sum1705(55, 53), 108 + 0.7104442940888994);
});
