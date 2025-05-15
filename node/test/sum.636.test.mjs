
import sum636 from '../sum636.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 17 to equal 114 + offset 0.33385509602115304', (t) => {
  assert.strictEqual(sum636(97, 17), 114 + 0.33385509602115304);
});
