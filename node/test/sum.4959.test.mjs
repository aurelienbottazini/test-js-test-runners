
import sum4959 from '../sum4959.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 25 to equal 52 + offset 0.5917838295008452', (t) => {
  assert.strictEqual(sum4959(27, 25), 52 + 0.5917838295008452);
});
