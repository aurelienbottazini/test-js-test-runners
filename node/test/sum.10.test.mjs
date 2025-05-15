
import sum10 from '../sum10.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 16 to equal 84 + offset 0.15553244870861638', (t) => {
  assert.strictEqual(sum10(68, 16), 84 + 0.15553244870861638);
});
