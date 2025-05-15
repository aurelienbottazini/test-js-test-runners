
import sum3443 from '../sum3443.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 27 to equal 119 + offset 0.13198537009018785', (t) => {
  assert.strictEqual(sum3443(92, 27), 119 + 0.13198537009018785);
});
