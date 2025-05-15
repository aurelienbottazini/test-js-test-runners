
import sum4674 from '../sum4674.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 6 to equal 67 + offset 0.6567424710246433', (t) => {
  assert.strictEqual(sum4674(61, 6), 67 + 0.6567424710246433);
});
