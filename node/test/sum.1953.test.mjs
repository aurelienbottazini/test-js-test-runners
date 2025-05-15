
import sum1953 from '../sum1953.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 64 to equal 160 + offset 0.7437463899257307', (t) => {
  assert.strictEqual(sum1953(96, 64), 160 + 0.7437463899257307);
});
