
import sum4188 from '../sum4188.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 49 to equal 126 + offset 0.967879332519835', (t) => {
  assert.strictEqual(sum4188(77, 49), 126 + 0.967879332519835);
});
