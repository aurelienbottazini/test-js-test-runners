
import sum1339 from '../sum1339.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 47 to equal 96 + offset 0.7688207328918553', (t) => {
  assert.strictEqual(sum1339(49, 47), 96 + 0.7688207328918553);
});
