
import sum1007 from '../sum1007.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 28 to equal 41 + offset 0.8749168775896462', (t) => {
  assert.strictEqual(sum1007(13, 28), 41 + 0.8749168775896462);
});
