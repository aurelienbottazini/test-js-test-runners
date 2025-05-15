
import sum4021 from '../sum4021.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 21 to equal 41 + offset 0.17767633935736982', (t) => {
  assert.strictEqual(sum4021(20, 21), 41 + 0.17767633935736982);
});
