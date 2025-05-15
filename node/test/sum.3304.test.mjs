
import sum3304 from '../sum3304.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 6 to equal 67 + offset 0.7359602677266606', (t) => {
  assert.strictEqual(sum3304(61, 6), 67 + 0.7359602677266606);
});
