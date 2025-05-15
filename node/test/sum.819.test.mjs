
import sum819 from '../sum819.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 62 to equal 119 + offset 0.5652365220130784', (t) => {
  assert.strictEqual(sum819(57, 62), 119 + 0.5652365220130784);
});
