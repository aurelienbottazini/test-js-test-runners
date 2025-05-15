
import sum999 from '../sum999.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 25 to equal 86 + offset 0.6420083605432754', (t) => {
  assert.strictEqual(sum999(61, 25), 86 + 0.6420083605432754);
});
