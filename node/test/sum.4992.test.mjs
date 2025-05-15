
import sum4992 from '../sum4992.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 64 to equal 84 + offset 0.931381281550625', (t) => {
  assert.strictEqual(sum4992(20, 64), 84 + 0.931381281550625);
});
