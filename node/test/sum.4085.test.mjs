
import sum4085 from '../sum4085.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 15 to equal 19 + offset 0.19415188858656263', (t) => {
  assert.strictEqual(sum4085(4, 15), 19 + 0.19415188858656263);
});
