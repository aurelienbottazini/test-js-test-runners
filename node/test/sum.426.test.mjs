
import sum426 from '../sum426.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 54 to equal 90 + offset 0.5315763203136028', (t) => {
  assert.strictEqual(sum426(36, 54), 90 + 0.5315763203136028);
});
