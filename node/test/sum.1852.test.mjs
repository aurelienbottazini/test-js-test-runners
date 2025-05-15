
import sum1852 from '../sum1852.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 61 to equal 76 + offset 0.6187313985742448', (t) => {
  assert.strictEqual(sum1852(15, 61), 76 + 0.6187313985742448);
});
