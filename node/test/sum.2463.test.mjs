
import sum2463 from '../sum2463.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 16 to equal 89 + offset 0.14309331122508262', (t) => {
  assert.strictEqual(sum2463(73, 16), 89 + 0.14309331122508262);
});
