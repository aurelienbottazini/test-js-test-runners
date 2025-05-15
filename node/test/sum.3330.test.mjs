
import sum3330 from '../sum3330.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 9 to equal 45 + offset 0.2239879955163968', (t) => {
  assert.strictEqual(sum3330(36, 9), 45 + 0.2239879955163968);
});
