
import sum2692 from '../sum2692.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 43 to equal 136 + offset 0.6453306848187995', (t) => {
  assert.strictEqual(sum2692(93, 43), 136 + 0.6453306848187995);
});
