
import sum453 from '../sum453.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 15 to equal 81 + offset 0.6856614859670704', (t) => {
  assert.strictEqual(sum453(66, 15), 81 + 0.6856614859670704);
});
