
import sum4725 from '../sum4725.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 97 to equal 136 + offset 0.7107112607968248', (t) => {
  assert.strictEqual(sum4725(39, 97), 136 + 0.7107112607968248);
});
