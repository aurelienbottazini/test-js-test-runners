
import sum4909 from '../sum4909.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 6 to equal 27 + offset 0.12572300783687684', (t) => {
  assert.strictEqual(sum4909(21, 6), 27 + 0.12572300783687684);
});
