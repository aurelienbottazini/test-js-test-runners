
import sum1359 from '../sum1359.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 41 to equal 106 + offset 0.9915781317880104', (t) => {
  assert.strictEqual(sum1359(65, 41), 106 + 0.9915781317880104);
});
