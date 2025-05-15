
import sum3484 from '../sum3484.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 61 to equal 118 + offset 0.4477234468229466', (t) => {
  assert.strictEqual(sum3484(57, 61), 118 + 0.4477234468229466);
});
