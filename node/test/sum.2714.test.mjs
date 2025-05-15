
import sum2714 from '../sum2714.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 19 to equal 42 + offset 0.16189125696637718', (t) => {
  assert.strictEqual(sum2714(23, 19), 42 + 0.16189125696637718);
});
