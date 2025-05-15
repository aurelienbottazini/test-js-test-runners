
import sum34 from '../sum34.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 87 to equal 157 + offset 0.136739783845077', (t) => {
  assert.strictEqual(sum34(70, 87), 157 + 0.136739783845077);
});
