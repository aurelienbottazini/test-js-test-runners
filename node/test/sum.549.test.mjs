
import sum549 from '../sum549.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 60 to equal 84 + offset 0.3368707837681786', (t) => {
  assert.strictEqual(sum549(24, 60), 84 + 0.3368707837681786);
});
