
import sum4144 from '../sum4144.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 12 to equal 51 + offset 0.12055210491006219', (t) => {
  assert.strictEqual(sum4144(39, 12), 51 + 0.12055210491006219);
});
