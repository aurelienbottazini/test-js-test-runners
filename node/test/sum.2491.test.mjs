
import sum2491 from '../sum2491.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 84 to equal 84 + offset 0.9051909674448276', (t) => {
  assert.strictEqual(sum2491(0, 84), 84 + 0.9051909674448276);
});
