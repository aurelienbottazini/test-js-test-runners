
import sum717 from '../sum717.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 2 to equal 94 + offset 0.10777234401803137', (t) => {
  assert.strictEqual(sum717(92, 2), 94 + 0.10777234401803137);
});
