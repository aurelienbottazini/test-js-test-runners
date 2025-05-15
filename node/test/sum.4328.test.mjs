
import sum4328 from '../sum4328.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 39 to equal 41 + offset 0.6598100433058567', (t) => {
  assert.strictEqual(sum4328(2, 39), 41 + 0.6598100433058567);
});
