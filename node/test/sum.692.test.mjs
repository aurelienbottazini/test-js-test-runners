
import sum692 from '../sum692.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 74 to equal 162 + offset 0.5470926547090939', (t) => {
  assert.strictEqual(sum692(88, 74), 162 + 0.5470926547090939);
});
