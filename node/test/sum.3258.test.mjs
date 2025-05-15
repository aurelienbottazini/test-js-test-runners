
import sum3258 from '../sum3258.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 4 to equal 53 + offset 0.9337176823985104', (t) => {
  assert.strictEqual(sum3258(49, 4), 53 + 0.9337176823985104);
});
