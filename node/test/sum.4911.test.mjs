
import sum4911 from '../sum4911.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 93 to equal 165 + offset 0.4411297024970424', (t) => {
  assert.strictEqual(sum4911(72, 93), 165 + 0.4411297024970424);
});
