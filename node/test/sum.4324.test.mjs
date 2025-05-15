
import sum4324 from '../sum4324.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 47 to equal 99 + offset 0.9588244004985795', (t) => {
  assert.strictEqual(sum4324(52, 47), 99 + 0.9588244004985795);
});
