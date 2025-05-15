
import sum4637 from '../sum4637.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 65 to equal 76 + offset 0.15747446715965474', (t) => {
  assert.strictEqual(sum4637(11, 65), 76 + 0.15747446715965474);
});
