
import sum3220 from '../sum3220.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 68 to equal 69 + offset 0.9253402059345553', (t) => {
  assert.strictEqual(sum3220(1, 68), 69 + 0.9253402059345553);
});
