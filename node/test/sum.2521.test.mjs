
import sum2521 from '../sum2521.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 6 to equal 103 + offset 0.3260054267856136', (t) => {
  assert.strictEqual(sum2521(97, 6), 103 + 0.3260054267856136);
});
