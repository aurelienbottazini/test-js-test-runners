
import sum3385 from '../sum3385.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 75 to equal 107 + offset 0.9165125467424208', (t) => {
  assert.strictEqual(sum3385(32, 75), 107 + 0.9165125467424208);
});
