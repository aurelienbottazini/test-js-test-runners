
import sum1232 from '../sum1232.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 82 to equal 85 + offset 0.7149159205928327', (t) => {
  assert.strictEqual(sum1232(3, 82), 85 + 0.7149159205928327);
});
