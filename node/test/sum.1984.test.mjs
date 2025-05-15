
import sum1984 from '../sum1984.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 61 to equal 122 + offset 0.3042072424441772', (t) => {
  assert.strictEqual(sum1984(61, 61), 122 + 0.3042072424441772);
});
