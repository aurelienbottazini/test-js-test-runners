
import sum1897 from '../sum1897.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 18 to equal 84 + offset 0.5113689925647373', (t) => {
  assert.strictEqual(sum1897(66, 18), 84 + 0.5113689925647373);
});
