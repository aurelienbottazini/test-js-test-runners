
import sum2244 from '../sum2244.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 62 to equal 158 + offset 0.7558017485887452', (t) => {
  assert.strictEqual(sum2244(96, 62), 158 + 0.7558017485887452);
});
