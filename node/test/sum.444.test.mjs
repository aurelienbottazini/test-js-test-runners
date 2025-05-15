
import sum444 from '../sum444.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 39 to equal 82 + offset 0.6312231669917516', (t) => {
  assert.strictEqual(sum444(43, 39), 82 + 0.6312231669917516);
});
