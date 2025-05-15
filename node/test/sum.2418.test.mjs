
import sum2418 from '../sum2418.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 98 to equal 159 + offset 0.41150236631738857', (t) => {
  assert.strictEqual(sum2418(61, 98), 159 + 0.41150236631738857);
});
