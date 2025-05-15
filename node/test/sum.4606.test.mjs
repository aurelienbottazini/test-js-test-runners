
import sum4606 from '../sum4606.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 48 to equal 72 + offset 0.8365101315183017', (t) => {
  assert.strictEqual(sum4606(24, 48), 72 + 0.8365101315183017);
});
