
import sum1579 from '../sum1579.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 26 to equal 56 + offset 0.5993800838392713', (t) => {
  assert.strictEqual(sum1579(30, 26), 56 + 0.5993800838392713);
});
