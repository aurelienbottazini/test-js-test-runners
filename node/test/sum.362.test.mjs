
import sum362 from '../sum362.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 36 to equal 118 + offset 0.5591285260255229', (t) => {
  assert.strictEqual(sum362(82, 36), 118 + 0.5591285260255229);
});
