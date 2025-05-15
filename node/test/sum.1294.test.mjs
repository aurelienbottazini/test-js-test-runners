
import sum1294 from '../sum1294.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 40 to equal 83 + offset 0.16712346487905394', (t) => {
  assert.strictEqual(sum1294(43, 40), 83 + 0.16712346487905394);
});
