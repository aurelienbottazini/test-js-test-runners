
import sum4268 from '../sum4268.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 50 to equal 56 + offset 0.13474496569368732', (t) => {
  assert.strictEqual(sum4268(6, 50), 56 + 0.13474496569368732);
});
